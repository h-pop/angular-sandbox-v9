import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() selectedRecipe: Recipe;
  selectedRecipe: Recipe;
  selectedRecipeIndex: number;
  manageRecipeClicked = false;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.selectedRecipeIndex = +this.route.snapshot.params['id'];
    this.selectedRecipe = this.recipeService.getRecipe(this.selectedRecipeIndex);
    //or this
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedRecipe = this.recipeService.getRecipe(+params['id']);
      }
    );
  }

  onToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.selectedRecipeIndex);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
