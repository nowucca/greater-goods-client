// Contains all the custom types we want to use for our application
export interface ProductItem {
  productId: number;
  name: string;
  description: string;
  price: number;
  points: number;
  lastUpdate: number;
  categoryId: number;
}

export interface CategoryItem {
  categoryId: number;
  name: string;
}

/*

The representation of a cart is an array of ShoppingCartItem.

 */

export class ShoppingCart {
  private itemArray: ShoppingCartItem[];

  constructor() {
    this.itemArray = [];
  }

  // A getter (function prefixed with get) allows you to call the function as a property
  // For example, here you would call cart.numberOfItems instead of cart.numberOfItems()

  /*
   * Returns the total number of books in the shopping cart.
   */
  get numberOfItems(): number {
    return this.itemArray.reduce((count: number, item: ShoppingCartItem) => {
      return count + item.quantity;
    }, 0);
  }

  /*
   * Returns true if the cart is empty; false otherwise.
   */
  get empty(): boolean {
    return this.itemArray.length <= 0;
  }

  /**
   * Returns the sum of the item's price multiplied by the quantity for all
   * items in shopping cart list. This is the total cost excluding the surcharge.
   */
  get subtotal(): number {
    return this.itemArray.reduce((amount: number, item: ShoppingCartItem) => {
      return amount + item.product.price * item.quantity;
    }, 0);
  }

  /**
   * Returns the total cost of the order (subtotal + surcharge).
   */
  get total(): number {
    return this.subtotal + this.surcharge;
  }

  /**
   * Returns the surcharge to be applied for items in the cart.
   */
  get surcharge(): number {
    return 500;
  }

  /**
   * Empties this cart, discards all items.
   */
  clear(): void {
    this.itemArray = [];
  }

  /**
   * Adds a single specified book to the shopping cart.
   */
  addProduct(product: ProductItem) {
    const existingItem = this.itemArray.find(
      (item) => item.product.productId === product.productId
    );
    if (!existingItem) {
      const newItem = new ShoppingCartItem(product);
      newItem.quantity = 1;
      this.itemArray.push(newItem);
    } else {
      existingItem.quantity++;
    }
  }

  /**
   * Updates the quantity of the specified book by the specified amount.
   * If '0' is the given quantity, the book is removed from the cart.
   */
  update(product: ProductItem, quantity: number) {
    if (quantity < 0 || quantity > 99) return;

    const existingItemIndex = this.itemArray.findIndex(
      (item) => item.product.productId === product.productId
    );
    if (existingItemIndex !== -1) {
      if (quantity !== 0) {
        this.itemArray[existingItemIndex].quantity = quantity;
      } else {
        // remove item if quantity == 0
        this.itemArray.splice(existingItemIndex, 1);
      }
    }
  }

  get items(): readonly ShoppingCartItem[] {
    return this.itemArray;
  }
}

export class ShoppingCartItem {
  readonly product: ProductItem;
  quantity: number;

  constructor(theProduct: ProductItem) {
    this.product = theProduct;
    this.quantity = 1;
  }
}
