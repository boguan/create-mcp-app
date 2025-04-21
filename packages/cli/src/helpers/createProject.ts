import fs from "fs";
import path from "path";

import { scaffoldProject } from "~/helpers/scaffoldProject.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";
import { getUserPkgManager } from "~/utils/getUserPkgManager.js";

interface CreateProjectOptions {
  boilerplatePath: string;
  projectName: string;
  noInstall: boolean;
  serverType: 'high-level' | 'advanced';
}

export const createProject = async ({
  boilerplatePath,
  projectName,
  noInstall,
  serverType,
}: CreateProjectOptions) => {
  const pkgManager = getUserPkgManager();
  const projectDir = path.resolve(process.cwd(), projectName);

  // Bootstraps the base Next.js application
  await scaffoldProject({
    boilerplatePath,
    projectName,
    projectDir,
    pkgManager,
    noInstall,
  });

  const sourceDir = path.join(boilerplatePath, `extras/server-type/${serverType}`);
  const targetDir = path.join(projectDir, "src");
  fs.cpSync(sourceDir, targetDir, { 
    recursive: true,
    force: true 
  });
  if (serverType === 'advanced') {
    addPackageDependency({
      projectDir,
      dependencies: ["zod-to-json-schema"],
      devMode: false,
    });
  }

  return projectDir;
};
