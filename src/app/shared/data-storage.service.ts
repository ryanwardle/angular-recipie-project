import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipieService } from '../recipies/recipies.service';
import { Recipie } from '../recipies/recipie.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private recipiesService: RecipieService) {}


    storeRecipies() {
      return this.http.put('https://ng-recipie-book-cdc71.firebaseio.com/recipies.json', this.recipiesService.getRecipies());
    }

    getRecipies() {
      this.http.get('https://ng-recipie-book-cdc71.firebaseio.com/recipies.json')
      .map(
        (response: Response) => {
          const recipies: Recipie[] = response.json();
          for (const recipie of recipies) {
            if (!recipie['ingredients']) {
              recipie['ingredients'] = [];
            }
          }
          return recipies;
        }
      )
      .subscribe((recipies: Recipie[]) => {
        this.recipiesService.setRecipies(recipies);
      });
    }
}
