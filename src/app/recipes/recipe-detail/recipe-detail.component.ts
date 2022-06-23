import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {}

  onAddToSL() {
    this.recipesService.addIngredientsToSL(this.recipe.ingredients);
  }
}
