import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipies.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  recipie: Recipie;
  id: number;

  constructor(private recipieService: RecipieService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipie = this.recipieService.getRecipie(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipieService.addIngredientsToList(this.recipie.ingredients);
  }

  onEditRecipie() {
    this.router.navigate(['edit'], { relativeTo: this.route});
  }

  onDeleteRecipie() {
    this.recipieService.deleteRecipie(this.id);
    this.router.navigate(['/recipies']);
  }
}
