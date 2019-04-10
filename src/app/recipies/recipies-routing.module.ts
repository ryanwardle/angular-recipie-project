import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipiesComponent } from './recipies.component';
import { RecipiesStartComponent } from './recipies-start/recipies-start.component';
import { RecipieDetailComponent } from './recipie-detail/recipie-detail.component';
import {RecipieEditComponent } from './recipie-edit/recipie-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';

const recipiesRoutes: Routes = [
  {path: '', component: RecipiesComponent, children: [
    {path: '', component: RecipiesStartComponent},
    {path: 'new', component: RecipieEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: RecipieDetailComponent },
    {path: ':id/edit', component: RecipieEditComponent, canActivate: [AuthGuard] }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(recipiesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipiesRoutingModule {

}
