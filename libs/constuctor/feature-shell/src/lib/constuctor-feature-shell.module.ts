import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstuctorUiModule } from '@brickber/constuctor/ui';
import { ConstructorFieldComponent } from './components/constructor-field/constructor-field.component';
import { ConstuctorDataAccessModule } from '@brickber/constuctor/data-access';

@NgModule({
  imports: [
    CommonModule,
    ConstuctorUiModule,
    ConstuctorDataAccessModule,
  ],
  declarations: [
    ConstructorFieldComponent
  ],
  exports: [
    ConstructorFieldComponent
  ]
})
export class ConstuctorFeatureShellModule {}
