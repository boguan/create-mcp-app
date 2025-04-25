English | [简体中文](https://github.com/boguan/create-mcp-app/blob/main/apps/create-mcp-client-app/docs/README_zh-CN.md) | [繁體中文](https://github.com/boguan/create-mcp-app/blob/main/apps/create-mcp-client-app/docs/README_zh-TW.md) | [日本語](https://github.com/boguan/create-mcp-app/blob/main/apps/create-mcp-client-app/docs/README_ja-JP.md)

# create-mcp-client-app

A CLI tool to quickly scaffold a Model Context Protocol (MCP) client application.

## Features

- 🚀 Instant MCP client setup with one-command project initialization
- 📦 First-class TypeScript support with complete type hints and checks
- 🔧 Integrated modern development toolchain for enhanced productivity
- 📝 Optimized project architecture with clear code organization
- 🎯 Flexible extension system supporting custom module integration

## Quick Start

```bash
# Using npm
npx create-mcp-client-app@latest

# Using pnpm
pnpm create mcp-client-app@latest

# Using yarn
yarn create mcp-client-app

# Using bun
bun create mcp-client-app@latest
```

It will create a directory inside the current folder.

![Client Demo](https://raw.githubusercontent.com/boguan/create-mcp-app/main/packages/docs/client.gif)

## Advanced Usage

The following advanced options are available when creating a project:

| Option/Flag | Description |
|------------|-------------|
| [dir] | Specify a directory name for the project |
| --noGit | Explicitly tell the CLI to not initialize a new git repository in the project |
| -y, --default | Skip the CLI prompts and bootstrap a new app with all default options |
| --noInstall | Generate project without installing dependencies |

Example usage:

```bash
# Create a project with a specific directory name
pnpm create mcp-client-app@latest my-client-app

# Create a project without git initialization
pnpm create mcp-client-app@latest --noGit

# Create a project with default options
pnpm create mcp-client-app@latest -y

# Create a project without installing dependencies
pnpm create mcp-client-app@latest --noInstall

## Requirements

- Node.js >= 18.17.0
- npm, pnpm, or yarn

## Project Structure

```
my-mcp-client/
├── src/
│   ├── MCPClient.ts           # MCP client implementation
│   ├── index.ts               # Main entry point
│   └── types.d.ts             # TypeScript type definitions
├── .env                       # Environment configuration file
├── .gitignore                   # Git ignore configuration file
├── server-config.json.example   # Example server configuration file
├── package.json
├── tsconfig.json
└── README.md
```

## Development

```bash
# Install dependencies
pnpm install

# Start TypeScript compiler in watch mode
pnpm watch

# Build for production
pnpm build
```

## License

MIT

## Author

Boguan <786506@gmail.com>

## Acknowledgments

This project is based on the [Model Context Protocol TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk).