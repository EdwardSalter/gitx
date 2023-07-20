import { Args, Command } from "@oclif/core";
import { simpleGit } from "simple-git";
import checkbox from "@inquirer/checkbox";
import colors from "@colors/colors/safe";
import { ArgInput } from "@oclif/core/lib/interfaces/parser";

export default class Rm extends Command {
  static description =
    "Provide an interactive CLI for removing many branches at once";

  static examples = [`<%= config.bin %> <%= command.id %>`];

  static flags = {};

  static args: ArgInput = {
    repo: Args.directory({
      description:
        "The path to the git repository. Defaults to the current directory.",
      required: false,
      default: ".",
    }),
  };

  async run(): Promise<void> {
    const { args } = await this.parse(Rm);

    const repo = simpleGit(args.repo);
    const branches = await repo.branchLocal();
    // console.log(branches);

    const selectedBranches = await checkbox({
      message: "Choose branches to remove",
      choices: branches.all.map((branch) => ({
        name: branch,
        value: branch,
        disabled: branch === branches.current,
      })),
    });
    try {
      const result = await repo.deleteLocalBranches(selectedBranches);
      if (!result.success) {
        const branchList = this.formatBranchList(
          result.errors.map((err) => err.branch),
          colors.red,
        );
        this.log("Failed to remove the following branches:", branchList);
      } else {
        const branchList = this.formatBranchList(
          selectedBranches,
          colors.green,
        );
        this.log("Successfully removed the following branches:", branchList);
      }
    } catch (err) {
      console.log(err);
    }
  }

  private formatBranchList(
    branches: string[],
    colour: (str: string) => string,
  ): string {
    return branches.map((b) => colour(`"${b}"`)).join(", ");
  }
}
