//tests/singleFunction.test.js

const proxy = require('./../pages/singleFunction');

test('it should invoke the callback function', () => {
  // (1)
  const mockFn = jest.fn();

  // (2)
  proxy('Hello World', mockFn);

  // (3)
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith('Hello World');
});