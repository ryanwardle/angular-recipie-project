import { EventEmitter } from '@angular/core';

import { Recipie } from './recipie.model';

export class RecipieService {
  recipieSelected = new EventEmitter<Recipie>();

  private recipies: Recipie[] = [
    new Recipie('Test recipie', 'this is a test',
    `https://www.foodlion.com/content/dam/fresh-ideas/5fallchickenbreastrecipes/5-fall-chicken-recipes-final.jpg.adapt.full.low.jpg`),

    new Recipie('Different Test recipie', 'this is a test',
    `https://www.foodlion.com/content/dam/fresh-ideas/5fallchickenbreastrecipes/5-fall-chicken-recipes-final.jpg.adapt.full.low.jpg`)
  ];

  getRecipies() {
    return this.recipies.slice();
  }
}
