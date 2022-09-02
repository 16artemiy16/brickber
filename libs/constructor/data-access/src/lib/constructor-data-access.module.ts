import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { fieldReducer } from './store/field.reducer';
import { FieldSandbox } from './store/field.sandbox';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('field', fieldReducer),
  ],
  providers: [FieldSandbox],
})
export class ConstructorDataAccessModule {}
