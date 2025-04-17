import { ToolSchema, CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js"
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import packageJson from "../../package.json" with { type: "json" };

const ToolInputSchema = ToolSchema.shape.inputSchema;
type ToolInput = z.infer<typeof ToolInputSchema>;

enum ToolName {
  ADD = "add",
};

const AddSchema = z.object({
  a: z.number().describe("First number"),
  b: z.number().describe("Second number"),
});

export const createServer = () => {

  // Create server instance
  const server = new Server({
    name: packageJson.name, // or "mcp-server-boilerplate"
    version: packageJson.version, // or "0.0.1"
    description: packageJson.description, // or "A simple MCP server that provides a sum calculator tool",
  }, {
    capabilities: {
      tools: {},
    },
  });

  // Define available tools
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [{
        name: ToolName.ADD,
        description: "Add two numbers.",
        inputSchema: zodToJsonSchema(AddSchema) as ToolInput,
      }]
    }
  })

  // Handle tool execution
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    if (name === ToolName.ADD) {
      const validatedArgs = AddSchema.parse(args);
      const sum = validatedArgs.a + validatedArgs.b;
      return {
        content: [
          {
            type: "text",
            text: `The sum of ${validatedArgs.a} and ${validatedArgs.b} is ${sum}.`,
          },
        ],
      };
    }

    throw new Error("Tool not found");
  });

  const cleanup = async () => {
    // Cleanup resources
  };
  return { server, cleanup };
};