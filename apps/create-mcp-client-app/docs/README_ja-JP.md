[English](../README.md) | [简体中文](README_zh-CN.md) | [繁體中文](README_zh-TW.md) | 日本語

# create-mcp-client-app

Model Context Protocol (MCP) クライアントアプリケーションを素早くスキャフォールドするためのCLIツール。

## 特徴

- 🚀 ワンコマンドでMCPクライアントを即座にセットアップ
- 📦 完全な型ヒントとチェックを備えた一級のTypeScriptサポート
- 🔧 生産性を向上させる統合された最新の開発ツールチェーン
- 📝 明確なコード構成による最適化されたプロジェクトアーキテクチャ
- 🎯 カスタムモジュールの統合をサポートする柔軟な拡張システム

## クイックスタート

```bash
# npmを使用
npm create mcp-client-app@latest

# pnpmを使用
pnpm create mcp-client-app@latest

# yarnを使用
yarn create mcp-client-app@latest

# bunを使用
bun create mcp-client-app@latest
```

現在のフォルダ内にディレクトリが作成されます。

![Client Demo](https://raw.githubusercontent.com/boguan/create-mcp-app/main/packages/docs/client.gif)

## 必要条件

- Node.js >= 18.17.0
- npm, pnpm, or yarn

## プロジェクト構造

```
my-mcp-client/
├── src/
│   ├── MCPClient.ts           # MCPクライアントの実装
│   ├── index.ts               # メインエントリーポイント
│   └── types.d.ts             # TypeScript型定義
├── .env                       # 環境設定ファイル
├── .gitignore                   # Gitの除外設定ファイル
├── server-config.json.example   # サーバー設定ファイルの例
├── package.json
├── tsconfig.json
└── README.md
```

## 開発

```bash
# 依存関係のインストール
pnpm install

# TypeScriptコンパイラをウォッチモードで起動
pnpm watch

# プロダクション用ビルド
pnpm build
```

## ライセンス

MIT

## 作者

Boguan <786506@gmail.com>

## 謝辞

このプロジェクトは [Model Context Protocol TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) をベースにしています。