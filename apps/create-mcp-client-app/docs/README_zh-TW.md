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
npx create-mcp-client-app@latest

# Using pnpm
pnpm create mcp-client-app@latest

# Using yarn
yarn create mcp-client-app

# Using bun
bun create mcp-client-app@latest
```

這將在當前資料夾內創建一個目錄。

![Client Demo](https://raw.githubusercontent.com/boguan/create-mcp-app/main/packages/docs/client.gif)

## 進階使用

以下是建立專案時可用的進階選項：

| 選項/標記 | 說明 |
|------------|-------------|
| [dir] | 指定專案的目錄名稱 |
| --noGit | 明確告訴 CLI 不要在專案中初始化新的 git 儲存庫 |
| -y, --default | 跳過 CLI 提示並使用所有預設選項建立新應用程式 |
| --noInstall | 生成專案時不安裝相依套件 |

使用範例：

```bash
# 使用指定的目錄名稱建立專案
pnpm create mcp-client-app@latest my-client-app

# 建立不含 git 初始化的專案
pnpm create mcp-client-app@latest --noGit

# 使用預設選項建立專案
pnpm create mcp-client-app@latest -y

# 建立不安裝相依套件的專案
pnpm create mcp-client-app@latest --noInstall
```

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