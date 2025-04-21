#!/usr/bin/env node
import { main, logger } from "@mcp/cli";
import path from "path";
import fs from "fs-extra";
import { type PackageJson } from "type-fest";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);

const BOILERPLATE_PATH = path.join(distPath, "../boilerplate");
const PKG_ROOT = path.join(distPath, "../");
const packageJson = fs.readJSONSync(path.join(PKG_ROOT, "./package.json")) as PackageJson;
const DEFAULT_APP_NAME = "mcp-server-app";

main({ 
  packageJson: packageJson,
  defaultAppName: DEFAULT_APP_NAME,
  boilerplatePath: BOILERPLATE_PATH,
}).catch((err) => {
  logger.error("Aborting installation...");
  if (err instanceof Error) {
    logger.error(err);
  } else {
    logger.error(
      "An unknown error has occurred. Please open an issue on github with the below:"
    );
    console.log(err);
  }
  process.exit(1);
});