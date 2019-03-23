import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipie } from './recipie.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject} from 'rxjs';

@Injectable()
export class RecipieService {

  recipiesChanged = new Subject<Recipie[]>();

  private recipies: Recipie[] = [
    new Recipie('Test recipie',
    'this is a test',
    `https://www.foodlion.com/content/dam/fresh-ideas/5fallchickenbreastrecipes/5-fall-chicken-recipes-final.jpg.adapt.full.low.jpg`,
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),

    new Recipie('Different Test recipie',
    'this is a test',
    `https://www.foodlion.com/content/dam/fresh-ideas/5fallchickenbreastrecipes/5-fall-chicken-recipes-final.jpg.adapt.full.low.jpg`,
    [
      new Ingredient('Buns', 2),
      new Ingredient('Beef', 1)
    ])
  ];

  getRecipies() {
    return this.recipies.slice();
  }

  getRecipie(id: number) {
    return this.recipies[id];
  }

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredientsToList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipie(recipie: Recipie) {
    this.recipies.push(recipie);
    this.recipiesChanged.next(this.recipies.slice());
  }

  updateRecipie(index: number, newRecipie: Recipie) {
    this.recipies[index] = newRecipie;
    this.recipiesChanged.next(this.recipies.slice());
  }

  deleteRecipie(index: number) {
    this.recipies.splice(index, 1);
    this.recipiesChanged.next(this.recipies.slice());
  }
}
