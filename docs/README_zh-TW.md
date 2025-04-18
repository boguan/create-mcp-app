[English](../README.md) | [简体中文](README_zh-CN.md) | 繁體中文 | [日本語](README_ja-JP.md)

# create-mcp-server-app

一個快速創建 Model Context Protocol (MCP) 伺服器應用的 CLI 工具。

## 特性

- 🚀 快速搭建 MCP 伺服器應用
- 📦 內置 TypeScript 支持
- 🔧 現代化的開發工具鏈
- 📝 結構良好的項目模板
- 🎯 易於擴展和自定義

## 快速開始

```bash
# 使用 npm
npx create-mcp-server-app my-mcp-server

# 使用 pnpm
pnpm create mcp-server-app my-mcp-server

# 使用 yarn
yarn create mcp-server-app my-mcp-server

# 使用 bun
bun create mcp-server-app my-mcp-server
```

## 要求

- Node.js >= 18.17.0
- npm、pnpm 或 yarn

## 项目结构

```
my-mcp-server/
├── src/
│   ├── index.ts          # 主入口檔案
│   ├── server/
│       ├── server.ts     # 核心伺服器實現
│       ├── resources.ts  # 資源相關實現
│       └── tools.ts      # 工具相關實現
├── package.json
├── tsconfig.json
└── README.md
```

## 開發

```bash
# 安裝依賴
pnpm install

# 啟動開發伺服器
pnpm dev

# 構建生產版本
pnpm build
```

## 許可證

MIT

## 作者

Boguan <786506@gmail.com>

## 致謝

本項目基於 [Model Context Protocol TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) 開發。