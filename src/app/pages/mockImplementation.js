// mockImplementation.js

class ProductService {
    async getProductDetails(productId) {
      // Fetch product details from an API
      // (actual implementation not shown here)
      return { id: productId, name: 'Sample Product', price: 49.99 };
    }
  }
  
  export default new ProductService();