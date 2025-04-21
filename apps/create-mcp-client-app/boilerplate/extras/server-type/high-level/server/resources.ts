import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export const registerResources = (server: McpServer) => {
  // Add a dynamic greeting resource
  // Returns a greeting for a given name
  server.resource(
    "A greeting resource",
    new ResourceTemplate("greeting://{name}", { list: undefined }),
    async (uri, { name }) => ({
      contents: [{
        uri: uri.href,
        text: `Hello, ${name}!`,
        mimeType: "text/plain",
      }]
    })
  );
  /*
    Client request example:
    const result = await client.request(
      {
        method: "resources/read",
        params: {
          uri: "greeting://world"
        }
      },
      ReadResourceResultSchema
    );
    result.contents[0].text === "Hello, world!";
  */
};