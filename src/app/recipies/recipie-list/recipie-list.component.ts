import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../recipie.model';
@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  @Output() recipieWasSelected = new EventEmitter<Recipie>();
  recipie;
  recipies: Recipie[] = [
    new Recipie('Test recipie', 'this is a test',
    `https://www.foodlion.com/content/dam/fresh-ideas/5fallchickenbreastrecipes/5-fall-chicken-recipes-final.jpg.adapt.full.low.jpg`),

    new Recipie('Different Test recipie', 'this is a test',
    `https://www.foodlion.com/content/dam/fresh-ideas/5fallchickenbreastrecipes/5-fall-chicken-recipes-final.jpg.adapt.full.low.jpg`)
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipieSelected(recipie: Recipie) {
    this.recipieWasSelected.emit(recipie);
  }
}
