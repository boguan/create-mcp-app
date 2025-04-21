import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { ListToolsRequestSchema, CallToolRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { zodToJsonSchema } from "zod-to-json-schema";
import { AddSchema } from "../schemas.js";
import { ToolName } from "../constants.js";

export const registerToolHandlers = (server: Server) => {
  // Define available tools
  // Return the list of available tools
  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [{
      name: ToolName.ADD,
      description: "Add two numbers.",
      inputSchema: zodToJsonSchema(AddSchema),
    }]
  }));

  // Handle tool execution
  // Return the result of the tool execution
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
  /*
    Client request example:
    const result = await client.request(
      {
        method: "tools/call",
        params: {
          name: "add",
          arguments: {
            a: 5,
            b: 3
          }
        }
      },
      CallToolResultSchema
    );
    // result.content[0].text === "The sum of 5 and 3 is 8."
  */
};