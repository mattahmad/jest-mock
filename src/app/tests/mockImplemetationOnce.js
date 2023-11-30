// tests/mockImplementationOnce.test.js

import { calculateDiscount } from './../pages/mockImplementationOnce';

describe('DiscountCalculator', () => {
  it('should apply 10% discount once', () => {
    calculateDiscount.mockImplementationOnce((price) => price * 0.9);
    expect(calculateDiscount(100, 10)).toBe(90);
  });

  it('should apply 20% discount once', () => {
    calculateDiscount.mockImplementationOnce((price) => price * 0.8);
    expect(calculateDiscount(100, 20)).toBe(80);
  });

  it('should use the default implementation', () => {
    expect(calculateDiscount(100, 30)).toBe(70);
  });
});