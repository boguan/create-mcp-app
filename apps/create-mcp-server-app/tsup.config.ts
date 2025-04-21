import { defineConfig } from "tsup";
import { resolve } from "path";

const isDev = process.env.npm_lifecycle_event === "dev";

export default defineConfig({
  clean: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  minify: false, // !isDev
  platform: 'node',
  target: "esnext",
  outDir: "dist",
  onSuccess: isDev ? "node dist/index.js" : undefined,
  esbuildOptions(options) {
    options.alias = {
      "@mcp/cli": resolve(__dirname, "../../packages/cli/dist")
    }
  }
});