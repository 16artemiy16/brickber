import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructorUiModule } from '@brickber/constructor/ui';
import { ConstructorFieldComponent } from './components/constructor-field/constructor-field.component';
import { ConstructorDataAccessModule } from '@brickber/constructor/data-access';

@NgModule({
  imports: [
    CommonModule,
    ConstructorUiModule,
    ConstructorDataAccessModule,
  ],
  declarations: [
    ConstructorFieldComponent
  ],
  exports: [
    ConstructorFieldComponent
  ]
})
export class ConstructorFeatureShellModule {}
