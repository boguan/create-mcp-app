import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export const registerTools = (server: McpServer) => {
  // Add an addition tool
  // Returns the sum of two numbers as text
  server.tool("add",
    {
      a: z.number().describe("The first number to add"),
      b: z.number().describe("The second number to add")
    },
    async ({ a, b }) => ({
      content: [{ type: "text", text: String(a + b) }]
    })
  );
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
    result.content[0].text === "8";
  */
};