[English](../README.md) | [简体中文](README_zh-CN.md) | [繁體中文](README_zh-TW.md) | 日本語

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
npm create mcp-server-app@latest

# Using pnpm
pnpm create mcp-server-app@latest

# Using yarn
yarn create mcp-server-app@latest

# Using bun
bun create mcp-server-app@latest
```

現在のフォルダ内にディレクトリが作成されます。

## 必要条件

- Node.js >= 18.17.0
- npm, pnpm, or yarn

## プロジェクト構造

```
my-mcp-server/
├── src/
│   ├── index.ts          # メインエントリーポイント
│   ├── server/
│       ├── server.ts     # コアサーバーセットアップ
│       ├── resources.ts  # リソース関連ハンドラー
│       └── tools.ts      # ツール関連ハンドラー
├── package.json
├── tsconfig.json
└── README.md
```

## 開発

```bash
# 依存関係のインストール
pnpm install

# TypeScript コンパイラーの監視モードを起動
pnpm watch

# プロダクションビルド
pnpm build
```

## ライセンス

MIT

## 作者

Boguan <786506@gmail.com>

## 謝辞

このプロジェクトは [Model Context Protocol TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)をベースにしています。