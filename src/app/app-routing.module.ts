import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipies', pathMatch: 'full'},
  {path: 'recipies', component: RecipiesComponent},
  {path: 'shopping', component: ShoppingListComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})

export class AppRoutingModule {}
