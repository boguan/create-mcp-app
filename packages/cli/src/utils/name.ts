import { type PackageJson } from "type-fest";

export const getName = (packageJson: PackageJson) => {
  return packageJson.name ?? "mcp-app";
};
