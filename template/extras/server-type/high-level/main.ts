import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import packageJson from "../../package.json" with { type: "json" };

export const createServer = () => {

  // Create an MCP server
  const server = new McpServer({
    name: packageJson.name, // or "mcp-server-boilerplate"
    version: packageJson.version, // or "0.0.1"
  });

  // Add an addition tool
  server.tool("add",
    {
      a: z.number().describe("The first number to add"),
      b: z.number().describe("The second number to add")
    },
    async ({ a, b }) => ({
      content: [{ type: "text", text: String(a + b) }]
    })
  );

  // Add a dynamic greeting resource
  server.resource(
    "greeting",
    new ResourceTemplate("greeting://{name}", { list: undefined }),
    async (uri, { name }) => ({
      contents: [{
        uri: uri.href,
        text: `Hello, ${name}!`
      }]
    })
  );

  const cleanup = async () => {
    // Cleanup resources
  };
  return { server, cleanup };
};