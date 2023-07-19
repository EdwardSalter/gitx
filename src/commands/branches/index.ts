import { Args, Command, Flags } from "@oclif/core";

export default class Hello extends Command {
  static description = "Say branches";

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ];

  static flags = {
    from: Flags.string({
      char: "f",
      description: "Who is saying branches",
      required: true,
    }),
  };

  static args = {
    person: Args.string({
      description: "Person to say branches to",
      required: true,
    }),
  };

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Hello);

    this.log(
      `hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`,
    );
  }
}
