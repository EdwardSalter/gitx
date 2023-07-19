import { expect, test } from "@oclif/test";

describe("branches world", () => {
  test
    .stdout()
    .command(["branches:world"])
    .it("runs branches world cmd", (ctx) => {
      expect(ctx.stdout).to.contain("branches world!");
    });
});
