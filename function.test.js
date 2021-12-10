import * as functions from "./functions";

// Making notes for https://jestjs.io/docs/using-matchers

// to run code before and after each test
const initDatabase = () => {
  // console.log("database connected");
};

const closeDatabase = () => {
  // console.log("database connected");
};

beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

// to run code before all and after all each test
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

// toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead:
let valueToBe = 4;
test(`adds 2+2 to equal ${valueToBe}`, () => {
  expect(functions.add(2, 2)).toBe(valueToBe);
});

// it is possible to use negation as well
let valueNotToBe = 3;
test(`adds 2+2 to not equal ${valueNotToBe}`, () => {
  expect(functions.add(2, 2)).not.toBe(valueNotToBe);
});

// toBeNull, toBeUndefined, toBeDefined,
test(`should be null`, () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test(`should be false`, () => {
  expect(functions.checkValue(false)).toBeFalsy();
  expect(functions.checkValue(null)).toBeFalsy();
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toBeTruthy
test(`should not be false`, () => {
  expect(functions.checkValue(true)).toBeTruthy();
  expect(functions.checkValue("a")).toBeTruthy();
  expect(functions.checkValue(5)).toBeTruthy();
});

// check the object
test(`should return mock data object`, () => {
  expect(functions.createUser()).toEqual({
    firstName: "Joe",
    lastName: "Doe",
    age: 50,
    isLoggedIn: true,
  });
});

// we can write functions directly inside tests for quick checks
test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// test regex (from documentation file)
test("no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// arrays
test("there should be an apple", () => {
  const fruits = ["apple", "pear", "melon"];
  expect(fruits).toContain("apple");
});

// DO NOT CALL ASYNC WITHOUT MOCKING API

// // async data "Promise"
// test("user fetch name should be Leanne Graham with Promise", () => {
//   // check how many calls were done
//   expect.assertions(1);
//   // return promise otherwise the test will complete before the axios fetches the data
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });

//   // make sure we are using return and expect.assertions(1) for testing of async functions
// });

// // async data with "Await"
// test("user fetch name should be Leanne Graham with async", async () => {
//   const data = await functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

const axios = require("axios");
jest.mock("axios");

// maybe (usually) we do not want to use the real API, mock it!
test("user fetch name should be in uppercase", async () => {
  axios.get.mockResolvedValue({
    data: {
      name: "Alena",
    },
  });

  const data = await functions.fetchedNameToUppercaseName().then((name) => {
    expect(name === name.toUpperCase()).toBeTruthy();
    expect(name).toEqual("ALENA");
  });
});
