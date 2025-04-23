#!/usr/bin/env node

import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { MCPClient } from "./MCPClient.js";
import chalk from "chalk";
import type { ServerConfig } from "./types.d.ts";

dotenv.config();

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

async function main() {
  if (!ANTHROPIC_API_KEY) {
    console.log(chalk.redBright.bold("Error: ") + "ANTHROPIC_API_KEY is not set");
    console.log(chalk.yellow("Please add your Anthropic API key to a .env file in the root directory:"));
    console.log(chalk.gray("ANTHROPIC_API_KEY=sk-your-api-key"));
    process.exit(1);
  }
  if (ANTHROPIC_API_KEY.startsWith("sk-") === false) {
    console.log(chalk.redBright.bold("Error: ") + "Invalid ANTHROPIC_API_KEY format");
    console.log(chalk.yellow("Please provide a valid API key in your .env file:"));
    console.log(chalk.gray("ANTHROPIC_API_KEY=sk-your-api-key"));
    process.exit(1);
  }

  let serverConfig: ServerConfig;

  // Try to read from server-config.json first
  const configPath = path.join(process.cwd(), "server-config.json");
  if (fs.existsSync(configPath)) {
    try {
      const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
      serverConfig = {
        command: config.command,
        args: config.args,
      };
    } catch (e) {
      console.error("Error reading server-config.json:", e);
      process.exit(1);
    }
  } else if (process.argv.length < 3) {
    console.log(`
${chalk.redBright.bold("Error:")} Missing required argument
${chalk.yellow("Usage:")} node ./dist/index.js <path_to_server_script> [additional_args...]
${chalk.gray("Example:")} node ./dist/index.js ./server.js arg1 arg2
    `);
    return;
  } else {
    const serverScript = process.argv[2];
    const additionalArgs = process.argv.slice(3);
    serverConfig = [serverScript, ...additionalArgs];
  }
  
  const mcpClient = new MCPClient(ANTHROPIC_API_KEY as string);
  try {
    await mcpClient.connectToServer(serverConfig);
    await mcpClient.chatLoop();
  } finally {
    await mcpClient.cleanup();
    process.exit(0);
  }
}

main();