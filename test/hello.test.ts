import { describe, it, expect } from "bun:test";
import { sayHello } from "../src/hello.ts";

describe("Bun Test Runner", () => {
  it("should support unit test", async () => {
    const response = sayHello("Udin");
    expect(response).toBe("Good bye Udin");
  });

  it("should support unit test with mamang", async () => {
    const response = sayHello("mamang");
    expect(response).toBe("Good bye mamang");
  });
});
