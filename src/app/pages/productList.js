// ProductList.js

import React from 'react';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        // ... other products
      ],
      cartItems: [],
    };
  }

  addToCart(product) {
    // Logic to add product to the cart
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, product],
    }));
  }

  render() {
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {this.state.products.map((product) => (
            <li key={product.id}>
              {product.name}{' '}
              <button onClick={() => this.addToCart(product)}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductList;