class Product {
  /*
	    Sample JSON:
		{
		  "productId": 1009,
		  "name": "Whole Milk",
		  "description": "1 gallon",
		  "price": 189,
		  "points": 1,
		  "lastUpdate": 1562026364000,
		  "categoryId": 1003
		}
    */
  constructor(jsonObject = {}) {
    this._productId = jsonObject.productId
    this._name = jsonObject.name
    this._description = jsonObject.description
    this._price = jsonObject.price
    this._points = jsonObject.points
    this._lastUpdate = new Date(jsonObject.lastUpdate)
    this._categoryId = jsonObject.categoryId
  }

  get productId() {
    return this._productId
  }

  set productId(value) {
    this._productId = value
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }

  get description() {
    return this._description
  }

  set description(value) {
    this._description = value
  }

  get price() {
    return this._price
  }

  set price(value) {
    this._price = value
  }

  get points() {
    return this._points
  }

  set points(value) {
    this._points = value
  }

  get lastUpdate() {
    return this._lastUpdate
  }

  set lastUpdate(value) {
    this._lastUpdate = value
  }

  get categoryId() {
    return this._categoryId
  }

  set categoryId(value) {
    this._categoryId = value
  }

  toString() {
    return 'Product[product_id=' + this.productId + ']'
  }

  // Used inside JSON.stringify
  toJSON() {
    return {
      productId: this._productId,
      name: this._name,
      description: this._description,
      price: this._price,
      points: this._points,
      lastUpdate: this._lastUpdate.getTime(),
      categoryId: this._categoryId
    }
  }
}

export { Product }
