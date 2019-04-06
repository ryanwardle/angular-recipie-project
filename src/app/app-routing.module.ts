import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipiesStartComponent } from './recipies/recipies-start/recipies-start.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import {RecipieEditComponent } from './recipies/recipie-edit/recipie-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipies', pathMatch: 'full'},
  {path: 'recipies', component: RecipiesComponent, children: [
    {path: '', component: RecipiesStartComponent}, {path: 'new', component: RecipieEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: RecipieDetailComponent }, {path: ':id/edit', component: RecipieEditComponent, canActivate: [AuthGuard] }
  ]},
  {path: 'shopping', component: ShoppingListComponent},
  {path: 'signup', component: SignupComponent}, {path: 'signin', component: SigninComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})

export class AppRoutingModule {}
