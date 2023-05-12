import capitalize from "./capitalize"; // import function to test

test("capitalize first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});
