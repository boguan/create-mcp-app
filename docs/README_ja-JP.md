[English](../README.md) | [简体中文](docs/README_zh-CN.md) | [繁體中文](docs/README_zh-TW.md) | 日本語

# create-mcp-server-app

Model Context Protocol (MCP) サーバーアプリケーションを素早く構築するための CLI ツール。

## 特徴

- 🚀 MCP サーバーアプリケーションの迅速なセットアップ
- 📦 TypeScript サポート搭載
- 🔧 最新の開発ツール
- 📝 整理された構造のプロジェクトボイラープレート
- 🎯 拡張とカスタマイズが容易

## クイックスタート

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

## 必要条件

- Node.js >= 18.17.0
- npm, pnpm, or yarn

## プロジェクト構造

```
my-mcp-server/
├── src/
│   ├── index.ts        # メインサーバーの実装
│   ├── resources/      # リソースハンドラー
│   ├── tools/          # ツールの実装
│   └── prompts/        # プロンプトテンプレート
├── package.json
├── tsconfig.json
└── README.md
```

## 開発

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# プロダクションビルド
pnpm build
```

## ライセンス

MIT

## 作者

Boguan <786506@gmail.com>

## 謝辞

このプロジェクトは [Model Context Protocol TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)をベースにしています。