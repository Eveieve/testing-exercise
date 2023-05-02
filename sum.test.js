const capitalize = require("./sum");

test("capitalize first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});
