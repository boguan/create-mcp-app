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
npx create-mcp-server-app@latest

# 使用 pnpm
pnpm create mcp-server-app@latest

# 使用 yarn
yarn create mcp-server-app

# 使用 bun
bun create mcp-server-app@latest
```

这将在当前文件夹内创建一个目录。

![Server Demo](https://raw.githubusercontent.com/boguan/create-mcp-app/main/packages/docs/server.gif)

## 高级用法

创建项目时可以使用以下高级选项：

| 选项/标记 | 描述 |
|------------|-------------|
| [dir] | 指定项目的目录名称 |
| --noGit | 明确告诉 CLI 不要在项目中初始化新的 git 仓库 |
| -y, --default | 跳过 CLI 提示，使用所有默认选项创建新应用 |
| --noInstall | 生成项目但不安装依赖 |

### 使用示例：

```bash
# 使用指定目录名创建项目
pnpm create mcp-server-app@latest my-server-app

# 创建项目但不初始化 git
pnpm create mcp-server-app@latest --noGit

# 使用默认选项创建项目
pnpm create mcp-server-app@latest -y

# 创建项目但不安装依赖
pnpm create mcp-server-app@latest --noInstall
```

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
└── README.md             # MCP 服务器开发指南
```

## MCP 服务器开发指南

有关如何开发和测试 MCP 服务器的详细说明，包括：
- 服务器设置和配置
- MCP 工具执行流程
- 使用 Cursor IDE 和 Claude Desktop 进行测试
- 实际应用示例

请参阅我们的[详细开发指南](https://github.com/boguan/create-mcp-app/blob/main/apps/create-mcp-server-app/boilerplate/base/README.md)。

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