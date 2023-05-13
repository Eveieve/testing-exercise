import analyzeArray from "./analyzeArray";

describe("analyzes array", () => {
  test("get average", () => {
    expect(analyzeArray().average([3, 4, 8, 12, 34])).toBe(12.2);
  });
  test("get minimum value", () => {
    expect(analyzeArray().min([3, 4, 8, 12, 34])).toBe(3);
  });
  test("get maximum value", () => {
    expect(analyzeArray().max([3, 4, 8, 12, 34])).toBe(34);
  });
  test("get length", () => {
    expect(analyzeArray().length([3, 4, 8, 12, 34])).toBe(5);
  });
});
