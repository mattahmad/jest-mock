// tests/fooToTest.test.js

import IBar from './../pages/bazDepToBeMocked';
import Baz from './../pages/iBarDepToBeMocked';
import Foo from './../pages/fooToTest';

const mockExpected = "mock value";

jest.mock('./../pages/IBarDepToBeMocked'); // Mock IBar module
jest.mock('./../pages/bazDepToBeMocked'); // Mock Baz module

test('Foo', () => {
  const barMock = new IBar(); // Create a mock instance of IBar
  const bazMock = new Baz(); // Create a mock instance of Baz

  const foo = new Foo(barMock, bazMock);

  expect(foo.bestLaCroixFlavor()).toBe('grapefruit'); // Your test logic here

});