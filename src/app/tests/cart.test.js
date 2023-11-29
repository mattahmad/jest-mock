// tests/cart.test.js
import { addToCart } from './../pages/cart';
import { calculateTotal } from './../pages/product';

jest.mock('./../pages/product', () => ({
    calculateTotal: jest.fn((product, quantity) => product.price * quantity),
}));

describe('addToCart', () => {
    it('calculates total correctly', () => {
        const product = { price: 10 };
        const quantity = 3;
        expect(addToCart(product, quantity)).toBe(30);
        expect(calculateTotal).toHaveBeenCalledWith(product, quantity);
    });
});