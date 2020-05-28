import { Recipe } from '../recipe.model';
import * as RecipesActions from './recipe.actions';
import { Ingredient } from '../../shared/ingredient.model';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [],
  // recipes: [
  //     new Recipe('A test recipe 1', 'Description for example recipe',
  //       'http://cdn.veganricha.com/wp-content/uploads/2017/05/vegan-tofu-butter-masala-veganricha-0757.jpg',
  //       [
  //         new Ingredient('Meat', 1),
  //         new Ingredient('French fries', 20)
  //       ]),
  //     new Recipe('A test recipe 2', 'Description for example recipe',
  //       'http://cdn.veganricha.com/wp-content/uploads/2017/05/vegan-tofu-butter-masala-veganricha-0757.jpg',
  //       [
  //         new Ingredient('Buns', 2),
  //         new Ingredient('Meat', 1)
  //       ])
  //   ]
};

export function recipeReducer(
  state = initialState,
  action: RecipesActions.RecipesActions
) {
  switch (action.type) {
    case RecipesActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
      };
    case RecipesActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    case RecipesActions.UPDATE_RECIPE:
      const updatedRecipe = {
        ...state.recipes[action.payload.index],
        ...action.payload.newRecipe,
      };

      const updatedRecipes = [...state.recipes];
      updatedRecipes[action.payload.index] = updatedRecipe;

      return {
        ...state,
        recipes: updatedRecipes,
      };
    case RecipesActions.DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe, index) => {
          return index !== action.payload;
        }),
      };
    default:
      return state;
  }
}
