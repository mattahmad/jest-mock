import { example } from "./../pages/namedFunction";
const mockExpected = "mock value";
jest.mock("./../pages/namedFunction", () => ({
  example: jest.fn(() => mockExpected),
}));
it("returns the expected value", () => {
  const actual = example();
  expect(actual).toEqual(mockExpected);
});