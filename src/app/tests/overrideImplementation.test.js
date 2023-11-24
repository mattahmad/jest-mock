//tests/overrideImplementation.test.js

const proxy = require('./../pages/overrideImplementation');

test('it should return the data length', () => {
  const mockFn = jest.fn(data => data && data.length || 0);

  proxy('Hello World', mockFn);

  expect(mockFn).toHaveReturnedWith(11);
});