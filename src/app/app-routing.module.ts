import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipies', loadChildren: './recipies/recipies.module#RecipiesModule'},
  {path: 'shopping', component: ShoppingListComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],

  exports: [RouterModule]
})

export class AppRoutingModule {}
