/*

An associative array of ShoppingCartItem, where the key is the product identifier.

 */

import { ShoppingCartItem } from './ShoppingCartItem.js'

import store from '../store.js'

import { toInt, denseArray } from '../services/Utils'

class ShoppingCart {
  constructor() {
    this._items = [] /* Array of Shopping Cart Item */
    this._numberOfItems = 0
    this._total = 0
  }

  get numberOfItems() {
    return this._numberOfItems
  }

  get empty() {
    return this._numberOfItems <= 0
  }

  /**
   * Returns the sum of the product price multiplied by the quantity for all
   * items in shopping cart list. This is the total cost excluding the surcharge.
   *
   * @return the cost of all items times their quantities
   * @see ShoppingCartItem
   */
  get subtotal() {
    let amount = 0

    for (var scProductId in this._items) {
      let scItem = this._items[scProductId]
      amount += scItem.quantity * scItem.price
    }

    return amount
  }

  /**
   * Returns the total cost of the order for the given
   * <code>ShoppingCart</code> instance.
   *
   * @return the cost of all items times their quantities plus surcharge
   */
  get total() {
    this._total = this.subtotal + this.surcharge
    return this._total
  }

  /**
   * Returns the surcharge to be applied for items in the cart.
   *
   * @returns {number}
   */
  get surcharge() {
    return store.getters.surcharge
  }

  /**
   * Returns the list of <code>ShoppingCartItems</code>.
   *
   * @return the <code>items</code> list
   * @see ShoppingCartItem
   */
  get items() {
    return denseArray(this._items)
  }

  /**
   * Empties this cart, discards all items.
   */
  clear() {
    this._items = []
    this._numberOfItems = 0
    this._total = 0
  }

  /**
   * Adds a <code>ShoppingCartItem</code> to the <code>ShoppingCart</code>'s
   * <code>items</code> list. If item of the specified <code>product</code>
   * already exists in shopping cart list, the quantity of that item is
   * incremented, and the original price remains unchanged.
   *
   * @see ShoppingCartItem
   */
  addItem(product /*: Product */, quantity = 1) {
    let isNewItem = true

    for (let scProductId in this._items) {
      if (this._items.hasOwnProperty(scProductId)) {
        if (toInt(scProductId) === product.productId) {
          isNewItem = false
          this._items[scProductId].increment()
        }
      }
    }

    if (isNewItem === true) {
      let scItem = new ShoppingCartItem(product)
      scItem.quantity = quantity
      this._items[scItem.productId] = scItem
    }
    this.recalculateNumberOfItems()
  }

  /**
   * Updates the <code>ShoppingCartItem</code> of the specified
   * <code>product</code> to the specified quantity. If '<code>0</code>'
   * is the given quantity, the <code>ShoppingCartItem</code> is removed
   * from the <code>ShoppingCart</code>'s <code>items</code> list.
   *
   * @param product the product for which to update quantity
   * @param quantity the number which the <code>ShoppingCartItem</code> is updated to
   * @see ShoppingCartItem
   */
  update(product /*: Product*/, quantity) {
    if (quantity < 0 || quantity > 99) return

    for (let scProductId in this._items) {
      if (this._items.hasOwnProperty(scProductId)) {
        let scItem = this._items[scProductId]

        if (toInt(scProductId) === product.productId) {
          if (quantity !== 0) {
            // set item quantity to new value
            scItem.quantity = quantity
          } else {
            // if quantity equals 0, save item and break
            this._items.splice(product.productId, 1)
          }
        }
      }
    }
    this.recalculateNumberOfItems()
  }

  /**
   * Returns the sum of quantities for all items maintained in shopping cart
   * <code>items</code> list.
   *
   * @return the number of items in shopping cart
   * @see ShoppingCartItem
   */
  recalculateNumberOfItems() {
    let numberOfItems = 0

    for (let scProductId in this._items) {
      let scItem = this._items[scProductId]
      numberOfItems += scItem.quantity
    }
    this._numberOfItems = numberOfItems
  }

  toJSON() {
    return {
      items: denseArray(this._items),
      numberOfItems: this._numberOfItems,
      total: this._total
    }
  }
}

export { ShoppingCart }
