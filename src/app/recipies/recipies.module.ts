import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipiesComponent } from './recipies.component';
import { RecipieListComponent } from './recipie-list/recipie-list.component';
import { RecipiesStartComponent } from './recipies-start/recipies-start.component';
import { RecipieEditComponent } from './recipie-edit/recipie-edit.component';
import { RecipieDetailComponent } from './recipie-detail/recipie-detail.component';
import { RecipieItemComponent } from './recipie-list/recipie-item/recipie-item.component';
import { RecipiesRoutingModule } from './recipies-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipiesComponent,
    RecipieListComponent,
    RecipiesStartComponent,
    RecipieEditComponent,
    RecipieDetailComponent,
    RecipieItemComponent
  ],
  imports: [
      CommonModule,
      ReactiveFormsModule,
      RecipiesRoutingModule,
      SharedModule
  ]
})
export class RecipiesModule {

}
