export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public Recipes: { type: string; name: string; description: string; imagePath: string }[] = [];

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }

  newRecipe(recipe: { recipeName: string; recipeDesc: string }) {
    this.Recipes.push({
      type: 'Recipe',
      name: recipe.recipeName,
      description: recipe.recipeDesc,
      imagePath: 'Anything goes here...'
    });
  }
}