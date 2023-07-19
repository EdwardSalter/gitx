import { Command } from "@oclif/core";
import { simpleGit } from "simple-git";

export default class Rm extends Command {
  static description =
    "Provide an interactive CLI for removing many branches at once";

  static examples = [`<%= config.bin %> <%= command.id %>`];

  static flags = {};

  static args = {};

  async run(): Promise<void> {
    const branches = await simpleGit().branchLocal();
    console.log(branches);

    // this.log("branches world! (./src/commands/branches/world.ts)");
  }
}
