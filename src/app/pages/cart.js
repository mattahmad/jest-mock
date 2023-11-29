// cart.js
import { calculateTotal } from './../pages/product';

export function addToCart(product, quantity) {
    // Some cart logic
    return calculateTotal(product, quantity);
}