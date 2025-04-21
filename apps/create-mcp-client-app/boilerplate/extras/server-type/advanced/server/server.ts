import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import packageJson from "../../package.json" with { type: "json" };
import { registerToolHandlers } from "./handlers/tools.js";
import { registerResourceHandlers } from "./handlers/resources.js";

export const createServer = () => {
  // Create server instance
  const server = new Server({
    name: packageJson.name, // or "mcp-server-boilerplate"
    version: packageJson.version, // or "0.0.1"
    description: packageJson.description, // or "A simple MCP server that provides a sum calculator tool",
  }, {
    capabilities: {
      tools: {}, // Enable tools capability
      resources: {}, // Enable resources capability
    },
  });

  registerToolHandlers(server);
  registerResourceHandlers(server);

  const cleanup = async () => {
    // Cleanup resources
  };
  return { server, cleanup };
};