import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import packageJson from "../../package.json" with { type: "json" };
import { registerTools } from "./tools.js";
import { registerResources } from "./resources.js";

export const createServer = () => {

  // Create an MCP server
  const server = new McpServer({
    name: packageJson.name, // or "mcp-server-boilerplate"
    version: packageJson.version, // or "0.0.1"
  });

  // Register tools and resources
  registerTools(server);
  registerResources(server);

  const cleanup = async () => {
    // Cleanup resources
  };
  return { server, cleanup };
};