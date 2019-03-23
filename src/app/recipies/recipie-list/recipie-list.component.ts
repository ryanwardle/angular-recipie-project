import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit, OnDestroy {
  recipies: Recipie[];
  subscription: Subscription;

  constructor(private recipieService: RecipieService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipies = this.recipieService.getRecipies();

    this.subscription = this.recipieService.recipiesChanged.subscribe((recipies: Recipie[]) => {
      this.recipies = recipies;
    });
  }

  onNewRecipie() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
