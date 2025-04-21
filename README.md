# create-mcp-app

A scaffolding toolkit for Model Context Protocol (MCP) applications.

## Features

- 🚀 Quick setup of MCP applications
- 📦 Built-in TypeScript support
- 🔧 Modern development tooling
- 📝 Well-structured project templates
- 🎯 Easy to extend and customize
- 🏗️ Monorepo architecture support

## Apps and Packages

### Applications

- `create-mcp-server-app`: MCP server application creation tool
- `docs`: Documentation application

### Packages

- `@mcp/eslint-config`: ESLint configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@mcp/typescript-config`: `tsconfig.json` configurations used throughout the monorepo

All applications and packages are developed using TypeScript.

## Development Tools

This project comes configured with:

- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io) - Code formatting
- [Turborepo](https://turbo.build/) - Monorepo build system

## Quick Start

### Create MCP Server Application

```bash
npx create-mcp-server-app@latest my-mcp-server
```
