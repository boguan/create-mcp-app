English | [简体中文](docs/README_zh-CN.md) | [繁體中文](docs/README_zh-TW.md) | [日本語](docs/README_ja-JP.md)

# create-mcp-server-app

A CLI tool to quickly scaffold a Model Context Protocol (MCP) server application.

## Features

- 🚀 Quick setup of MCP server applications
- 📦 Built-in TypeScript support
- 🔧 Modern development tooling
- 📝 Well-structured project boilerplate
- 🎯 Easy to extend and customize

## Quick Start

```bash
# Using npm
npx create-mcp-server-app my-mcp-server

# Using pnpm
pnpm create mcp-server-app my-mcp-server

# Using yarn
yarn create mcp-server-app my-mcp-server

# Using bun
bun create mcp-server-app my-mcp-server
```

It will create a directory called my-mcp-server inside the current folder.

## Requirements

- Node.js >= 18.17.0
- npm, pnpm, or yarn

## Project Structure

```
my-mcp-server/
├── src/
│   ├── index.ts        # Main server implementation
│   ├── resources/      # Resource handlers
│   ├── tools/          # Tool implementations
│   └── prompts/        # Prompt templates
├── package.json
├── tsconfig.json
└── README.md
```

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## License

MIT

## Author

Boguan <786506@gmail.com>

## Acknowledgments

This project is based on the [Model Context Protocol TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk).