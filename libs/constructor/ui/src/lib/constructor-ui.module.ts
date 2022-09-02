import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShapeComponent } from './components/shape/shape.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShapeComponent],
  exports: [ShapeComponent],
})
export class ConstructorUiModule {}
