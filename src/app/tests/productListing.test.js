// test/productListing.test.js
import { getAvailableProducts } from './../pages/productListing';
import products from './../pages/products';

describe('getAvailableProducts', () => {
  it('returns only available products', () => {
    const spy = jest.spyOn(products, 'filter');
    const availableProducts = getAvailableProducts();

    expect(spy).toHaveBeenCalledWith(expect.any(Function));
    expect(availableProducts).toHaveLength(1); // Assuming only one product is available
    expect(availableProducts[0].name).toBe('Shoes');
  });
});