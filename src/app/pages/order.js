// order.js
import { addToCart } from './../pages/cart';

export function createOrder(products) {
    // Create an order
    const total = products.reduce((acc, product) => {
        return acc + addToCart(product, product.quantity);
    }, 0);
    return total;
}