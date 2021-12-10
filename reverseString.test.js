import { reverseString } from "./reverseString";

test("function exists", () => {
  expect(reverseString).toBeDefined();
});

test('reversing "test"', () => {
  expect(reverseString("hello")).toEqual("olleh");
});
