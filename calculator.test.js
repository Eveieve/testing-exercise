import calculate from "./calculator";

test("add two numbers", () => {
  expect(calculate().add(4, 5)).toBe(9);
});

test("multiply two numbers", () => {
  expect(calculate().multiply(3, 8)).toBe(24);
});

test("divide two numbers", () => {
  expect(calculate().divide(3, 8)).toBe(0.375);
});

test("subtract two numbers", () => {
  expect(calculate().subtract(3, 8)).toBe(-5);
});
