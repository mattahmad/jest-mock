// cartCustom.js
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        this.items.push(product);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

export default Cart;