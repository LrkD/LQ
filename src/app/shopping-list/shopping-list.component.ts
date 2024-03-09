import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  newIngredientName: string = '';
  newIngredientAmount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    if (this.newIngredientName && this.newIngredientAmount > 0) {
      const newIngredient = new Ingredient(this.newIngredientName, this.newIngredientAmount);
      this.ingredients.push(newIngredient);

      // Clear input fields after adding the ingredient
      this.newIngredientName = '';
      this.newIngredientAmount = 0;
    }
  }

  deleteIngredient(index: number) {
    if (index >= 0 && index < this.ingredients.length) {
      this.ingredients.splice(index, 1);
    }
  }

  clearShoppingList() {
    this.ingredients = [];
  }
}