import example from "./../pages/defaultFunction";
const mockExpected = "mock value";
jest.mock("./../pages/defaultFunction", () => jest.fn(() => mockExpected));
it("returns the expected value", () => {
  const actual = example();
  expect(actual).toEqual(mockExpected);
});