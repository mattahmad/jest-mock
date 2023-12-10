// tests/mockImplementation.test.js

import ProductService from './../pages/mockImplementation';

jest.mock('./../pages/mockImplementation', () => ({
  getProductDetails: jest.fn(() => ({
    id: 'mockedProductId',
    name: 'Mocked Product',
    price: 9.99,
  })),
}));

describe('ProductService', () => {
  it('should return mocked product details', async () => {
    const product = await ProductService.getProductDetails('someProductId');
    expect(product).toEqual({
      id: 'mockedProductId',
      name: 'Mocked Product',
      price: 9.99,
    });
  });
});