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
    `https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05
    /frying-pan-pizza-easy-recipe-collection.jpg`)
  ];
  constructor() { }

  ngOnInit() {
  }

}
