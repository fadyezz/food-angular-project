import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../Services/comp-name/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent {

  cartItems: any[] = []; // Use appropriate type for cart items

  constructor(
    private cartService: CartService,
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = this.cartService.getCartItems(); // Assuming getCartItems() returns the items in the cart
  }

  removeFromCart(item: any) { // Use appropriate type for item
    this.cartService.removeFromCart(item); // Assuming removeFromCart() handles item removal
    this.loadCartItems(); // Refresh the cart items
  }

  getTotalPrice(){
    return this.cartItems.reduce((total, item) => total + (item.caloriesPerServing || 0), 0);
  }
  clearCart() {
    this.cartService.clearCart(); // Assuming clearCart() clears all items
    this.loadCartItems(); // Refresh the cart items
  }

  goToProducts() {
    this.router.navigate(['/products']); // Navigate back to products page
  }

}
