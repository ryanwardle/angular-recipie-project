import { Component, OnInit } from '@angular/core';
import { RecipieService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipieService]
})
export class RecipiesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
