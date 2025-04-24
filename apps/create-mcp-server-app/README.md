English | [简体中文](https://github.com/boguan/create-mcp-app/blob/main/apps/create-mcp-server-app/docs/README_zh-CN.md) | [繁體中文](https://github.com/boguan/create-mcp-app/blob/main/apps/create-mcp-server-app/docs/README_zh-TW.md) | [日本語](https://github.com/boguan/create-mcp-app/blob/main/apps/create-mcp-server-app/docs/README_ja-JP.md)

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
npm create mcp-server-app@latest

# Using pnpm
pnpm create mcp-server-app@latest

# Using yarn
yarn create mcp-server-app@latest

# Using bun
bun create mcp-server-app@latest
```

It will create a directory inside the current folder.

![Server Demo](https://raw.githubusercontent.com/boguan/create-mcp-app/main/packages/docs/server.gif)

## Requirements

- Node.js >= 18.17.0
- npm, pnpm, or yarn

## Project Structure

```
my-mcp-server/
├── src/
│   ├── index.ts          # Main entry point
│   ├── server/
│       ├── server.ts     # Core server setup
│       ├── resources.ts  # Resource-related handlers
│       └── tools.ts      # Tool-related handlers
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