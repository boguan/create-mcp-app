#!/usr/bin/env node
import path from "path";
import { execa } from "execa";
import fs from "fs-extra";
import { type PackageJson } from "type-fest";

import { runCli } from "~/cli/index.js";
import { createProject } from "~/helpers/createProject.js";
import { initializeGit } from "~/helpers/git.js";
import { logNextSteps } from "~/helpers/logNextSteps.js";
import { getUserPkgManager } from "~/utils/getUserPkgManager.js";
import { logger } from "~/utils/logger.js";
import { parseNameAndPath } from "~/utils/parseNameAndPath.js";
import { installDependencies } from "./helpers/installDependencies.js";
import {
  getNpmVersion,
  renderVersionWarning,
} from "./utils/renderVersionWarning.js";

interface MainOptions {
  packageJson: PackageJson;
  defaultAppName: string;
  boilerplatePath: string;
}

const main = async ({ packageJson, defaultAppName, boilerplatePath }: MainOptions) => {
  const npmVersion = await getNpmVersion();
  const pkgManager = getUserPkgManager();
  if (npmVersion) {
    renderVersionWarning({ npmVersion, packageJson });
  }

  const {
    appName,
    flags: { noGit, noInstall, serverType },
  } = await runCli(packageJson, defaultAppName);

  // e.g. dir/@mono/app returns ["@mono/app", "dir/app"]
  const [scopedAppName, appDir] = parseNameAndPath(appName);

  const projectDir = await createProject({
    boilerplatePath,
    projectName: appDir,
    noInstall,
    serverType,
  });

  // Write name to package.json
  const pkgJson = fs.readJSONSync(
    path.join(projectDir, "package.json")
  ) as PackageJson;
  pkgJson.name = scopedAppName;
  pkgJson.bin = {
    [`${scopedAppName}`]: "dist/index.js"
  };

  // ? Bun doesn't support this field (yet)
  if (pkgManager !== "bun") {
    const { stdout } = await execa(pkgManager, ["-v"], {
      cwd: projectDir,
    });
    pkgJson.packageManager = `${pkgManager}@${stdout.trim()}`;
  }

  fs.writeJSONSync(path.join(projectDir, "package.json"), pkgJson, {
    spaces: 2,
  });


  if (!noInstall) {
    await installDependencies({ projectDir });
  }

  if (!noGit) {
    await initializeGit(projectDir);
  }

  await logNextSteps({
    projectName: appDir ?? defaultAppName,
    noInstall,
    projectDir,
  });

  process.exit(0);
};

export { main, logger };