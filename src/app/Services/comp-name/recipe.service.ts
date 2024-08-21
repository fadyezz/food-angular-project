import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://dummyjson.com/recipes';

  constructor() { }

  getRecipes() {
    return fetch(this.apiUrl)
      .then(res => res.json())
      .then(data => data.recipes); // Assuming the response has a 'recipes' field
  }
}
