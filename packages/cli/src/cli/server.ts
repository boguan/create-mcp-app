import * as p from "@clack/prompts";
import { Command } from "commander";
import { type PackageJson } from "type-fest";

import { getVersion } from "~/utils/version.js";
import { getName } from "~/utils/name.js";
import { getUserPkgManager } from "~/utils/getUserPkgManager.js";
import { IsTTYError } from "~/utils/isTTYError.js";
import { logger } from "~/utils/logger.js";
import { validateAppName } from "~/utils/validateAppName.js";

interface CliFlags {
  noGit: boolean;
  noInstall: boolean;
  default: boolean;

  serverType: 'high-level' | 'advanced';
}

interface CliResults {
  appName: string;
  flags: CliFlags;
}

export const runCli = async (packageJson: PackageJson, defaultAppName: string): Promise<CliResults> => {
  const cliResults: CliResults = {
    appName: defaultAppName,
    flags: {
      noGit: false,
      noInstall: false,
      default: false,
  
      serverType: 'high-level',
    },
  };

  const program = new Command()
    .name(getName(packageJson))
    .description("A CLI for creating MCP server applications")
    .argument(
      "[dir]",
      "The name of the application, as well as the name of the directory to create"
    )
    .option(
      "--noGit",
      "Explicitly tell the CLI to not initialize a new git repo in the project",
      false
    )
    .option(
      "--noInstall",
      "Explicitly tell the CLI to not run the package manager's install command",
      false
    )
    .option(
      "-y, --default",
      "Bypass the CLI and use all default options to bootstrap a new mcp-server-app",
      false
    )

    .option(
      "--serverType",
      "Explicitly tell the CLI to use MCP server type",
      ""
    )
    .version(getVersion(packageJson), "-v, --version", "Display the version number")
    .parse(process.argv);

  // Needs to be separated outside the if statement to correctly infer the type as string | undefined
  const cliProvidedName = program.args[0];
  if (cliProvidedName) {
    cliResults.appName = cliProvidedName;
  }

  const opts = program.opts();

  cliResults.flags = {
    noGit: Boolean(opts.noGit),
    noInstall: Boolean(opts.noInstall),
    default: Boolean(opts.default),
    serverType: (opts.serverType as 'high-level' | 'advanced') || 'high-level'
  };

  if (cliResults.flags.default) {
    return cliResults;
  }

  // Explained below why this is in a try/catch block
  try {

    // if --CI flag is set, we are running in CI mode and should not prompt the user

    const pkgManager = getUserPkgManager();

    const project = await p.group(
      {
        ...(!cliProvidedName && {
          name: () =>
            p.text({
              message: "What will your project be called?",
              defaultValue: cliProvidedName,
              validate: validateAppName,
            }),
        }),
        ...(cliResults.flags.serverType !== 'high-level' && cliResults.flags.serverType !== 'advanced' && {
          serverType: () => {
            return p.select<({
              value: "high-level";
              label: string;
          } | {
              value: "advanced";
              label: string;
          })[], "high-level"|"advanced">({
              message: "Select the MCP server type you want to use:",
              options: [
                { value: "high-level", label: "High-level MCP server (Simpler API for resources, tools, and prompts)" },
                { value: "advanced", label: "Advanced MCP server (Custom notifications and request handlers)" },
              ],
              initialValue: "high-level",
            });
          },
        }),
        ...(!cliResults.flags.noGit && {
          git: () => {
            return p.confirm({
              message:
                "Should we initialize a Git repository and stage the changes?",
              initialValue: !cliResults.flags.noGit,
            });
          },
        }),
        ...(!cliResults.flags.noInstall && {
          install: () => {
            return p.confirm({
              message:
                `Should we run '${pkgManager}` +
                (pkgManager === "yarn" ? `'?` : ` install' for you?`),
              initialValue: !cliResults.flags.noInstall,
            });
          },
        }),
      },
      {
        onCancel() {
          process.exit(1);
        },
      }
    );


    return {
      appName: project.name ?? cliResults.appName,
      flags: {
        ...cliResults.flags,
        noGit: !project.git || cliResults.flags.noGit,
        noInstall: !project.install || cliResults.flags.noInstall,
        serverType: project.serverType ?? cliResults.flags.serverType,
      },
    };
  } catch (err) {
    // If the user is not calling create-mcp-server-app from an interactive terminal, inquirer will throw an IsTTYError
    // If this happens, we catch the error, tell the user what has happened, and then continue to run the program with a default MCP server app
    if (err instanceof IsTTYError) {
      logger.warn(`
  ${getName(packageJson)} needs an interactive terminal to provide options`);

      const shouldContinue = await p.confirm({
        message: `Continue scaffolding a default MCP server app?`,
        initialValue: true,
      });

      if (!shouldContinue) {
        logger.info("Exiting...");
        process.exit(0);
      }

      logger.info(`Bootstrapping a default MCP server app in ./${cliResults.appName}`);
    } else {
      throw err;
    }
  }

  return cliResults;
};
