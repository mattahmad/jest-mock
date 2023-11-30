// productListing.js
import products from './../pages/products';

export function getAvailableProducts() {
  return products.filter((product) => product.available);
}