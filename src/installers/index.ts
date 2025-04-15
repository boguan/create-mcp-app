import { type PackageManager } from "~/utils/getUserPkgManager.js";

export interface InstallerOptions {
  projectDir: string;
  pkgManager: PackageManager;
  noInstall: boolean;
  projectName: string;
  scopedAppName: string;
}