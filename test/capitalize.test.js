import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
  test("capitalizes first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("handles already capitalized word", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });
});
