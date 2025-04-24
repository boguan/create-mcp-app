# create-mcp-app

A powerful scaffolding toolkit for creating Model Context Protocol (MCP) applications with modern development practices.

## Overview

create-mcp-app is a monorepo project that provides tools and templates for building MCP applications. It uses modern development practices and tools to ensure a smooth development experience.

## Features

- 🚀 Instant project scaffolding for MCP applications
- 📦 First-class TypeScript support
- 🔧 Modern development toolchain
- 🎯 Extensible and customizable templates
- 🏗️ Monorepo architecture with Turborepo
- 📝 Comprehensive documentation

## Project Structure

This project is organized as a monorepo using Turborepo, containing:

```
create-mcp-app/
├── apps/              # Application packages
├── packages/          # Shared packages and configurations
├── .vscode/          # VS Code configuration
└── package.json      # Root package configuration
```

## Quick Start

To create a new MCP server application:

```bash
npx create-mcp-server-app@latest my-mcp-server
```

![Server Demo](packages/docs/server.gif)

To create a new MCP client application:

```bash
npx create-mcp-client-app@latest my-mcp-client
```

![Server Demo](packages/docs/client.gif)

## Package Management

This project uses pnpm for package management. To get started with development:

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run development environment
pnpm dev
```

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Issues and Bugs

If you find a bug or have a suggestion:

- [Open an issue](https://github.com/boguan/create-mcp-app/issues)
- [Submit a pull request](https://github.com/boguan/create-mcp-app/pulls)

## License

This project is licensed under the terms of the license included in the [LICENSE](./LICENSE) file.
