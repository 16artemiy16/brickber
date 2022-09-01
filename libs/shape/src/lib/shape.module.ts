import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectangleComponent } from '../components/rectangle.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RectangleComponent
  ],
  exports: [
    RectangleComponent,
  ]
})
export class ShapeModule {}
