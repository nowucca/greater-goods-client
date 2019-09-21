class ShoppingCartItem {
  constructor(product) {
    this._product = product
    this._quantity = 1
  }

  get product() {
    return this._product
  }

  get quantity() {
    return this._quantity
  }

  set quantity(value) {
    this._quantity = value
  }

  get productId() {
    return this._product.productId
  }

  get price() {
    return this._product.price
  }

  get total() {
    return this._quantity * this.price
  }

  increment() {
    this._quantity++
  }

  decrement() {
    if (this._quantity > 0) {
      this._quantity--
    }
  }

  toJSON() {
    return {
      product: this._product,
      quantity: this._quantity
    }
  }
}

export { ShoppingCartItem }
