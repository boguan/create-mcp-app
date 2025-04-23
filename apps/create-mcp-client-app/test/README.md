# MCP Client Boilerplate

A command-line interface client for connecting to MCP servers.

## Prerequisites

- Node.js
- An Anthropic API key

## Setup

1. Create a `.env` file in the root directory and add your Anthropic API key:
   ```
   ANTHROPIC_API_KEY=your_api_key_here
   ```

2. Configure the server connection using one of the following methods:

   ### Option 1: Using server-config.json (Recommended)
   
   1. Rename `server-config.json.example` to `server-config.json`
   2. Update the configuration in `server-config.json`:
      ```json
      {
        "command": "/ABSOLUTE/PATH/TO/PARENT/FOLDER/server-name-1/dist/index.js",
        "args": ["additional", "arguments", "if", "needed"]
      }
      ```

   ### Option 2: Using Command Line Arguments

   Run the client with the path to your server script and any additional arguments:
   ```bash
   node ./dist/index.js <path_to_server_script> [additional_args...]
   ```

   Example:
   ```bash
   node ./dist/index.js ./server.js arg1 arg2
   ```

## Usage

1. Build the project:
   ```bash
   npm run build
   ```

2. Run the client:
   ```bash
   node ./dist/index.js
   ```

The client will connect to the specified MCP server and start an interactive chat session.

## Error Handling

- If the ANTHROPIC_API_KEY is not set, the program will throw an error
- If using server-config.json, any parsing errors will be reported
- If no configuration method is provided, the program will display usage instructions