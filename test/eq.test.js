import eq from "../src/eq.js";

describe("eq", () => {
  test("returns true for same primitive values", () => {
    expect(eq("a", "a")).toBe(true);
  });

  test("returns false for different values", () => {
    expect(eq("a", "b")).toBe(false);
  });

  test("returns true for NaN and NaN", () => {
    expect(eq(NaN, NaN)).toBe(true);
  });
});
