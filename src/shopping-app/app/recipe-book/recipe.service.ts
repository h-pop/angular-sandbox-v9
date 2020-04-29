import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  // selectedRecipe = new Subject<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  // private recipes: Recipe[] = [
  //   new Recipe('A test recipe 1', 'Description for example recipe',
  //     'http://cdn.veganricha.com/wp-content/uploads/2017/05/vegan-tofu-butter-masala-veganricha-0757.jpg',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French fries', 20)
  //     ]),
  //   new Recipe('A test recipe 2', 'Description for example recipe',
  //     'http://cdn.veganricha.com/wp-content/uploads/2017/05/vegan-tofu-butter-masala-veganricha-0757.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 1)
  //     ])
  // ];

  private recipes: Recipe[] = [];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    // acquiring recipes copies
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

