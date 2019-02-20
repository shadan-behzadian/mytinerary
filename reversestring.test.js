const reverseString = require("./reversestring");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("check if string reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("check if string reversess with UPPERCASE", () => {
  expect(reverseString("HELLO")).toEqual("olleh");
});
