import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';
@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[] = [
    new Recipie('Test recipie', 'this is a test',
    `https://www.foodlion.com/content/dam/fresh-ideas/5fallchickenbreastrecipes/5-fall-chicken-recipes-final.jpg.adapt.full.low.jpg`)
  ];
  constructor() { }

  ngOnInit() {
  }

}
