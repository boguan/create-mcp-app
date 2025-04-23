import { Anthropic } from "@anthropic-ai/sdk";
import {
  MessageParam,
  Tool,
  Message,
} from "@anthropic-ai/sdk/resources/messages/messages.mjs";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import readline from "readline/promises";
import type { ServerConfig } from "./types.d.ts";

// Protocol client that maintain 1:1 connection with servers
export class MCPClient {
  private mcp: Client;
  private anthropic: Anthropic;
  private transport: StdioClientTransport | null = null;
  private tools: Tool[] = [];

  constructor(apiKey: string) {
    this.anthropic = new Anthropic({
      apiKey: apiKey,
    });
    this.mcp = new Client({ name: "mcp-client", version: "1.0.0" });
  }
  
  async connectToServer(serverConfig: ServerConfig) {
    try {
      if (Array.isArray(serverConfig)) {
        const [scriptPath] = serverConfig;
        const isJs = scriptPath.endsWith(".js");
        const isPy = scriptPath.endsWith(".py");
        if (!isJs && !isPy) {
          throw new Error("Server script must be a .js or .py file");
        }
        const command = isPy
          ? process.platform === "win32"
            ? "python"
            : "python3"
          : process.execPath;
        
        this.transport = new StdioClientTransport({
          command,
          args: serverConfig,
        });
      } else {
        // Validate ServerConfig
        if (!serverConfig.command || typeof serverConfig.command !== 'string') {
          throw new Error("ServerConfig command must be a non-empty string");
        }
        if (!Array.isArray(serverConfig.args)) {
          throw new Error("ServerConfig args must be an array");
        }
        if (serverConfig.args.length === 0) {
          throw new Error("ServerConfig args cannot be empty");
        }
        if (serverConfig.args.some(arg => typeof arg !== 'string')) {
          throw new Error("All ServerConfig args must be strings");
        }

        this.transport = new StdioClientTransport({
          command: serverConfig.command,
          args: serverConfig.args,
        });
      }
      
      this.mcp.connect(this.transport);
      
      const toolsResult = await this.mcp.listTools();
      this.tools = toolsResult.tools.map((tool) => ({
        name: tool.name,
        description: tool.description,
        input_schema: tool.inputSchema,
      }));
      console.log(
        "Connected to server with tools:",
        this.tools.map(({ name }) => name)
      );
    } catch (e) {
      console.log("Failed to connect to MCP server: ", e);
      throw e;
    }
  }

  async processQuery(query: string) {
    const messages: MessageParam[] = [
      {
        role: "user",
        content: query,
      },
    ];
  
    let response: Message;
    try {
      response = await this.anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1000,
        messages,
        tools: this.tools,
      });
    } catch (error) {
      console.error('Error calling Anthropic API:', error);
      throw new Error(`Failed to get response from Anthropic: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  
    const finalText = [];
    const toolResults = [];
  
    for (const content of response.content) {
      if (content.type === "text") {
        finalText.push(content.text);
      } else if (content.type === "tool_use") {
        const toolName = content.name;
        const toolArgs = content.input as { [x: string]: unknown } | undefined;
  
        const result = await this.mcp.callTool({
          name: toolName,
          arguments: toolArgs,
        });
        toolResults.push(result);
        finalText.push(
          `[Calling tool ${toolName} with args ${JSON.stringify(toolArgs)}]`
        );
  
        messages.push({
          role: "user",
          content: result.content as string,
        });
  
        const response = await this.anthropic.messages.create({
          model: "claude-3-5-sonnet-20241022",
          max_tokens: 1000,
          messages,
        });
  
        finalText.push(
          response.content[0].type === "text" ? response.content[0].text : ""
        );
      }
    }
  
    return finalText.join("\n");
  }

  async chatLoop() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    try {
      console.log("\nMCP Client Started!");
      console.log("Type your queries or 'quit' to exit.");
  
      while (true) {
        const message = await rl.question("\nQuery: ");
        if (message.toLowerCase() === "quit") {
          break;
        }
        const response = await this.processQuery(message);
        console.log("\n" + response);
      }
    } finally {
      rl.close();
    }
  }
  
  async cleanup() {
    await this.mcp.close();
  }
} 