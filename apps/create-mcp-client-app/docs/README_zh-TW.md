[English](../README.md) | [简体中文](README_zh-CN.md) | 繁體中文 | [日本語](README_ja-JP.md)

# create-mcp-client-app

一個快速創建 Model Context Protocol (MCP) 客戶端應用的 CLI 工具。

## 特性

- 🚀 快速搭建 MCP 客戶端應用，一鍵完成專案初始化
- 📦 內建 TypeScript 支援，享受完整的類型提示和檢查
- 🔧 集成現代化開發工具鏈，提升開發效率
- 📝 優化的專案結構設計，清晰的程式碼組織
- 🎯 靈活的擴展機制，支援自訂功能模組

## 快速開始

```bash
# Using npm
npm create mcp-client-app@latest

# Using pnpm
pnpm create mcp-client-app@latest

# Using yarn
yarn create mcp-client-app@latest

# Using bun
bun create mcp-client-app@latest
```

這將在當前資料夾內創建一個目錄。

## 要求

- Node.js >= 18.17.0
- npm、pnpm 或 yarn

## 專案結構

```
my-mcp-client/
├── src/
│   ├── MCPClient.ts           # MCP 客戶端實現
│   ├── index.ts               # 主入口檔案
│   └── types.d.ts             # TypeScript 類型定義
├── .env                       # 環境配置檔案
├── .gitignore                   # Git 忽略配置檔案
├── server-config.json.example   # 伺服器配置範例檔案
├── package.json
├── tsconfig.json
└── README.md
```

## 開發

```bash
# 安裝依賴
pnpm install

# 啟動 TypeScript 編譯器監視模式
pnpm watch

# 建構生產版本
pnpm build
```

## 授權條款

MIT

## 作者

Boguan <786506@gmail.com>

## 致謝

本專案基於 [Model Context Protocol TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) 開發。