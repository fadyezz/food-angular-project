import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  /*products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', image: 'https://via.placeholder.com/150' },
  ];*/
    products: any[] = [];;
    currentSlide: number = 0;
    slides: { image: string; title: string; description: string }[] = [
      { image: 'margherita.jpg', title: 'Margherita Pizza', description: 'Classic cheese and tomato pizza.' },
      { image: 'pepperoni.jpg', title: 'Pepperoni Pizza', description: 'Spicy pepperoni with mozzarella cheese.' },
      { image: 'bbq.jpg', title: 'bbq Pizza', description: 'Loaded with fresh vegetables.' },
    ];
  
    ngOnInit(): void {
      this.startCarousel();
      this.getProductsApi();
    }
    getProductsApi(){
      fetch('https://dummyjson.com/recipes?limit=6')
      .then(res => res.json())
      .then(data => {
        this.products = data.recipes; // Assuming recipes are in data.recipes  
      
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
    }
    
  
    startCarousel(): void {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 2000); // Change slide every 3 seconds
    }
  
    getCurrentSlide(): { image: string; title: string; description: string } {
      return this.slides[this.currentSlide];
    }
  }
  


