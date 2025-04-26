import { defineConfig } from "tsup";

const isDev = process.env.npm_lifecycle_event === "dev";

export default defineConfig({
  clean: true,
  entry: ["src/index.ts"],
  noExternal: ["@mcp/cli"],
  format: ["esm"],
  minify: false, // !isDev
  platform: 'node',
  target: "esnext",
  outDir: "dist",
  onSuccess: isDev ? "node dist/index.js" : undefined
});