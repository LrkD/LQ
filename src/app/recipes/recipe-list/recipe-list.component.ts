import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes: Recipe[] = [];

    constructor() {
        // Initialize recipes array with some initial recipes
        this.recipes.push(
            new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
            new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
        );
    }

    // Function to add a new recipe
    addNewRecipe(): void {
        const newRecipe = new Recipe('New Recipe', 'A new recipe description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg');
        this.recipes.push(newRecipe);
    }
}
