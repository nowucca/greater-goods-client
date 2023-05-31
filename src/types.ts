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

export interface CustomerForm {
  name: string;
  address: string;
  phone: string;
  email: string;
  ccNumber: string;
}

export interface Order {
  orderId: number;
  amount: number;
  dateCreated: number;
  confirmationNumber: number;
  customerId: number;
}

export interface LineItem {
  productId: number;
  orderId: number;
  quantity: number;
}

export interface OrderDetails {
  order: Order;
  customer: CustomerForm;
  lineItems: LineItem[];
  products: ProductItem[];
}

/*

The representation of a cart is an array of ShoppingCartItem.

 */


