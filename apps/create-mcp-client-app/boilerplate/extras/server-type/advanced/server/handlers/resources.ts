import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { ListResourcesRequestSchema, ReadResourceRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { GREETING_RESOURCE, GREETING_URI } from "../constants.js";

export const registerResourceHandlers = (server: Server) => {
  // List available resources
  server.setRequestHandler(ListResourcesRequestSchema, async () => ({
    resources: [{
      uri: GREETING_URI,
      name: "A greeting resource",
      mimeType: "text/plain",
    }]
  }));

  // Handle resource reading
  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const { uri } = request.params;
    
    const match = uri.match(/^greeting:\/\/(.+)$/);
    if (!match) {
      throw new Error("Invalid greeting URI format");
    }
    
    const name = match[1];
    return {
      contents: [{
        uri,
        text: `Hello, ${name}!`,
        mimeType: "text/plain",
      }]
    };
  });
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
    // result.contents[0].text === "Hello, world!"
  */
};