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
npx create-mcp-server-app@latest

# 使用 pnpm
pnpm create mcp-server-app@latest

# 使用 yarn
yarn create mcp-server-app

# 使用 bun
bun create mcp-server-app@latest
```

這將在當前資料夾內創建一個目錄。

![Server Demo](https://raw.githubusercontent.com/boguan/create-mcp-app/main/packages/docs/server.gif)

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
pnpm create mcp-server-app@latest my-server-app

# 建立不含 git 初始化的專案
pnpm create mcp-server-app@latest --noGit

# 使用預設選項建立專案
pnpm create mcp-server-app@latest -y

# 建立不安裝相依套件的專案
pnpm create mcp-server-app@latest --noInstall
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
└── README.md             # MCP 伺服器開發指南
```

## MCP 伺服器開發指南

有關如何開發和測試您的 MCP 伺服器的詳細說明，包括：
- 設置 Claude for Desktop 進行測試
- 了解 MCP 工具執行流程
- 使用實際範例測試您的伺服器

請參考我們的[詳細開發指南](https://github.com/boguan/create-mcp-app/blob/main/apps/create-mcp-server-app/boilerplate/base/README.md)。

## 開發

```bash
# 安裝依賴
pnpm install

# 啟動 TypeScript 編譯器監視模式
pnpm watch

# 構建生產版本
pnpm build
```

## 許可證

MIT

## 作者

Boguan <786506@gmail.com>

## 致謝

本項目基於 [Model Context Protocol TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) 開發。