import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../../Services/comp-name/recipe.service';
import { CartService } from '../../Services/comp-name/cart.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})


export class ProductPageComponent implements OnInit {
  searchTerm: string = '';
  recipes: any[] = []; // Use appropriate type for recipes
  filteredRecipes: any[] = []; // To hold filtered recipes

  constructor(
    private recipeService: RecipeService,
    private cartService: CartService,
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    // Fetching data from the API
    this.getProductsApi()
  }
  getProductsApi(limit=0){
    fetch('https://dummyjson.com/recipes?limit='+limit)
    .then(res => res.json())
    .then(data => {
      this.recipes = data.recipes; // Assuming recipes are in data.recipes  
      this.filteredRecipes = this.recipes; // Initialize filteredRecipes
      console.log(this.recipes);
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
    });
  }
  filteredProducts() {
    if (!this.searchTerm) {
      return this.recipes; // Return all recipes if no search term
    }
    
    return this.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addToCart(recipe: any) { // Use appropriate type for recipe
    this.cartService.addToCart(recipe);
    
    // fetch('https://dummyjson.com/carts/add', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     userId: 6,
    //     products: [
    //       {
    //         id: recipe.id,
    //         quantity: 1,
    //       }
    //     ]
    //   })
    // })
    // .then(res => res.json())
    // .then(console.log);
    alert(`${recipe.name} added to cart!`); // Use template literals correctly
  }

  viewCart() {
    this.router.navigate(['/cart']); // Navigate to cart route
  }
}

/*searchTerm: string = '';
  Products: Product[] = [];

  constructor(
    public prodserve: ProductService,
    public cartService: CartService,
    public router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    this.prodserve.getProducts().subscribe({
      next: (data: Product[]) => {
        this.Products = data;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }

  filteredProducts() {
    if (!this.searchTerm) {
      return this.Products;
    }
    return this.Products.filter((product) =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(${product.title} added to cart!);
  }
  viewCart() {
    this.router.navigate(['/cart']); // Navigate to cart route
  }*/
