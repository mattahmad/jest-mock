// tests/productCustom.test.js
import Product from './../pages/productCustom';

test('Create a product', () => {
    const product = new Product(1, 'Shoes', 50);
    const expectedProduct = {
        id: 1,
        name: 'Shoes',
        price: 50,
    };

    // Custom matcher: Check if properties match
    expect(product.id).toBe(expectedProduct.id);
    expect(product.name).toBe(expectedProduct.name);
    expect(product.price).toBe(expectedProduct.price);
});