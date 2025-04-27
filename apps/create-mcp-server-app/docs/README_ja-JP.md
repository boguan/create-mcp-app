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
npx create-mcp-server-app@latest

# Using pnpm
pnpm create mcp-server-app@latest

# Using yarn
yarn create mcp-server-app

# Using bun
bun create mcp-server-app@latest
```

現在のフォルダ内にディレクトリが作成されます。

![Server Demo](https://raw.githubusercontent.com/boguan/create-mcp-app/main/packages/docs/server.gif)

## 高度な使用方法

プロジェクト作成時に以下の高度なオプションが利用可能です：

| オプション/フラグ | 説明 |
|------------|-------------|
| [dir] | プロジェクトのディレクトリ名を指定 |
| --noGit | プロジェクトでGitリポジトリを初期化しない |
| -y, --default | CLIプロンプトをスキップし、デフォルトオプションで新しいアプリをブートストラップ |
| --noInstall | 依存関係をインストールせずにプロジェクトを生成 |

### 使用例：

```bash
# 特定のディレクトリ名でプロジェクトを作成
pnpm create mcp-server-app@latest my-server-app

# Gitの初期化なしでプロジェクトを作成
pnpm create mcp-server-app@latest --noGit

# デフォルトオプションでプロジェクトを作成
pnpm create mcp-server-app@latest -y

# 依存関係のインストールなしでプロジェクトを作成
pnpm create mcp-server-app@latest --noInstall
```

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
└── README.md             # MCP サーバー開発ガイド
```

## MCP サーバー開発ガイド

詳細な開発ガイドについては、以下を含む包括的な説明をご参照ください：
- サーバーのセットアップと設定
- MCPツールの実行フロー
- Cursor IDEとClaude Desktopでのテスト方法
- 実践的な例

詳細な開発ガイドについては、[こちら](https://github.com/boguan/create-mcp-app/blob/main/apps/create-mcp-server-app/boilerplate/base/README.md)をご覧ください。

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