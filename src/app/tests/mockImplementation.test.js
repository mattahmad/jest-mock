// File: test/mockImplementation.test.js
function manipulateArray(array, manipulateMethod) {
    return array.map((item) => manipulateMethod(item));
  }
  
  test("playground", () => {
    const array = [0, 1, 2];
    const manipulateMethod = jest.fn().mockImplementation((x) => x + 2);
    manipulateArray(array, manipulateMethod);
  
    console.log(manipulateMethod.mock.results);
  });
  
  /* OUTPUT:
    [
      { type: 'return', value: 2 },
      { type: 'return', value: 3 },
      { type: 'return', value: 4 }
    ]
  */