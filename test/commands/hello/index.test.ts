import { expect, test } from "@oclif/test";

describe("branches", () => {
  test
    .stdout()
    .command(["branches", "friend", "--from=oclif"])
    .it("runs branches cmd", (ctx) => {
      expect(ctx.stdout).to.contain("branches friend from oclif!");
    });
});
