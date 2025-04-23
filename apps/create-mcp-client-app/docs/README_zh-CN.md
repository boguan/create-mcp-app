[English](../README.md) | 简体中文 | [繁體中文](README_zh-TW.md) | [日本語](README_ja-JP.md)

# create-mcp-client-app

一个快速创建 Model Context Protocol (MCP) 客户端应用的 CLI 工具。

## 特性

- 🚀 快速搭建 MCP 客户端应用，一键完成项目初始化
- 📦 内置 TypeScript 支持，享受完整的类型提示和检查
- 🔧 集成现代化开发工具链，提升开发效率
- 📝 优化的项目结构设计，清晰的代码组织
- 🎯 灵活的扩展机制，支持自定义功能模块

## 快速开始

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

## 要求

- Node.js >= 18.17.0
- npm、pnpm 或 yarn

## 项目结构

```
my-mcp-client/
├── src/
│   ├── MCPClient.ts           # MCP 客户端实现
│   ├── index.ts               # 主入口文件
│   └── types.d.ts             # TypeScript 类型定义
├── .env                       # 环境配置文件
├── .gitignore                   # Git 忽略配置文件
├── server-config.json.example   # 服务器配置示例文件
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