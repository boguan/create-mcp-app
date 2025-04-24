[English](../README.md) | 简体中文 | [繁體中文](README_zh-TW.md) | [日本語](README_ja-JP.md)

# create-mcp-server-app

一个快速创建 Model Context Protocol (MCP) 服务器应用的 CLI 工具。

## 特性

- 🚀 快速搭建 MCP 服务器应用
- 📦 内置 TypeScript 支持
- 🔧 现代化的开发工具链
- 📝 结构良好的项目模板
- 🎯 易于扩展和自定义

## 快速开始

```bash
# 使用 npm
npm create mcp-server-app@latest

# 使用 pnpm
pnpm create mcp-server-app@latest

# 使用 yarn
yarn create mcp-server-app@latest

# 使用 bun
bun create mcp-server-app@latest
```

这将在当前文件夹内创建一个目录。

## 要求

- Node.js >= 18.17.0
- npm、pnpm 或 yarn

## 项目结构

```
my-mcp-server/
├── src/
│   ├── index.ts          # 主入口文件
│   ├── server/
│       ├── server.ts     # 核心服务器实现
│       ├── resources.ts  # 资源相关实现
│       └── tools.ts      # 工具相关实现
├── package.json
├── tsconfig.json
└── README.md
```

## 开发

```bash
# 安装依赖
pnpm install

# 启动 TypeScript 编译器监视模式
pnpm watch

# 构建生产版本
pnpm build
```

## 许可证

MIT

## 作者

Boguan <786506@gmail.com>

## 致谢

本项目基于 [Model Context Protocol TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) 开发。