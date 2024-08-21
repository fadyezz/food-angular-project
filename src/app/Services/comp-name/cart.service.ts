import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any[] = []; // Use appropriate type for cart items

  constructor() {}

  addToCart(item: any) { // Use appropriate type for item
    this.cart.push(item);
  }

  getCartItems() {
    return this.cart;
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(cartItem => cartItem !== item);
  }

  clearCart() {
    this.cart = [];
  }
}
