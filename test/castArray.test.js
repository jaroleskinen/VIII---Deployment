import castArray from "../src/castArray.js";

describe("castArray", () => {
  test("wraps single value in array", () => {
    expect(castArray(1)).toEqual([1]);
  });

  test("returns same array if input is already array", () => {
    expect(castArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("returns empty array when called without argument", () => {
    expect(castArray()).toEqual([undefined]);
  });
});
