//tests/spyyOn.test.js

import { spyyOn } from "./../pages/spyyOn";
const mockExpected = "mock value";
jest.spyOn(spyyOn, "getValue").mockImplementation(jest.fn(() => mockExpected));
it("returns the expected value", () => {
  const actual = spyyOn.getValue();
  expect(actual).toEqual(mockExpected);
});