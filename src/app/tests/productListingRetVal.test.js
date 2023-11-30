// test/productListingRetVal.test.js
import { getAvailableProducts } from './../pages/productListingRetVal';
import products from './../pages/productsRetVal';

describe('getAvailableProducts', () => {
  it('returns only available products', () => {
    // Mock the filter method of the products array
    const mockFilter = jest.spyOn(products, 'filter');
    mockFilter.mockReturnValueOnce([{ name: 'Shoes', available: true }]);

    // Call the function
    const availableProducts = getAvailableProducts();

    // Assertions
    expect(mockFilter).toHaveBeenCalledWith(expect.any(Function));
    expect(availableProducts).toHaveLength(1);
    expect(availableProducts[0].name).toBe('Shoes');

    // Reset the mock for subsequent calls
    mockFilter.mockReturnValue([]);

    // Call the function again
    const noAvailableProducts = getAvailableProducts();

    // Assertions for the second call
    expect(mockFilter).toHaveBeenCalledTimes(2);
    expect(noAvailableProducts).toHaveLength(0);
  });
});
