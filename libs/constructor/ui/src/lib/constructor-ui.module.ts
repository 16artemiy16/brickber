import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShapeComponent } from './components/shape/shape.component';
import { SelectionFrameComponent } from './components/selection-frame/selection-frame.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ShapeComponent,
    SelectionFrameComponent,
  ],
  exports: [
    ShapeComponent,
    SelectionFrameComponent,
  ],
})
export class ConstructorUiModule {}
