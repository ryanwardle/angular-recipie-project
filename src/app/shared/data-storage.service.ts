import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipieService } from '../recipies/recipies.service';
import { Recipie } from '../recipies/recipie.model';
import { AuthService } from '../auth/auth.service';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private recipiesService: RecipieService,
              private authService: AuthService) {}


    storeRecipies() {
      const token = this.authService.getToken();
      return this.http.put('https://ng-recipie-book-cdc71.firebaseio.com/recipies.json?auth=' + token, this.recipiesService.getRecipies());
    }

    getRecipies() {
      const token = this.authService.getToken();
      this.http.get('https://ng-recipie-book-cdc71.firebaseio.com/recipies.json?auth=' + token)
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
