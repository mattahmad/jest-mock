// productListingRetVal.js
import products from './../pages/productsRetVal';

export function getAvailableProducts() {
  return products.filter((product) => product.available);
}