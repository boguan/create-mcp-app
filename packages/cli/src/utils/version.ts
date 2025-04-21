import { type PackageJson } from "type-fest";

export const getVersion = (packageJson: PackageJson) => {
  return packageJson.version ?? "1.0.0";
};
