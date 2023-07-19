import { Command } from "@oclif/core";
import { simpleGit } from "simple-git";
import checkbox from "@inquirer/checkbox";
import * as colors from "@colors/colors";
import { Color } from "@colors/colors";

export default class Rm extends Command {
  static description =
    "Provide an interactive CLI for removing many branches at once";

  static examples = [`<%= config.bin %> <%= command.id %>`];

  static flags = {};

  static args = {};

  async run(): Promise<void> {
    const repo = simpleGit();
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

    const result = await repo.deleteLocalBranches(selectedBranches);
    if (!result.success) {
      const branchList = this.formatBranchList(
        result.errors.map((err) => err.branch),
        colors.red,
      );
      this.log("Failed to remove the following branches:", branchList);
    } else {
      const branchList = this.formatBranchList(selectedBranches, colors.green);
      this.log("Successfully removed the following branches:", branchList);
    }

    // this.log("branches world! (./src/commands/branches/world.ts)");
  }

  private formatBranchList(branches: string[], colour: Color): string {
    return branches.map((b) => colour(`"${b}"`)).join(", ");
  }
}
