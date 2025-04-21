import { type PackageManager } from "~/utils/getUserPkgManager.js";

export interface InstallerOptions {
  boilerplatePath: string;
  projectDir: string;
  pkgManager: PackageManager;
  noInstall: boolean;
  projectName: string;
};