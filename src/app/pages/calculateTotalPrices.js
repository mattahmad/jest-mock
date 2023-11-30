// calculateTotalPrices.js
export function calculateTotalPrice(items) {
    // Some logic to calculate the total price
    return items.reduce((total, item) => total + item.price, 0);
  }