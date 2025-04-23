English | [简体中文](docs/README_zh-CN.md) | [繁體中文](docs/README_zh-TW.md) | [日本語](docs/README_ja-JP.md)

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
npx create-mcp-client-app@latest my-mcp-client

# Using pnpm
pnpm create mcp-client-app@latest my-mcp-client

# Using yarn
yarn create mcp-client-app@latest my-mcp-client

# Using bun
bun create mcp-client-app@latest my-mcp-client
```

It will create a directory called my-mcp-client inside the current folder.

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