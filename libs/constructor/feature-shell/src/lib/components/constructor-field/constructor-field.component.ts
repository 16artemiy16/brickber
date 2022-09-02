import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldSandbox } from '../../../../../data-access/src/lib/store/field.sandbox';
import { Observable, startWith } from 'rxjs';
import { ShapeOnFieldI, ShapeType } from '@brickber/constructor/util';

@Component({
  selector: 'brickber-constructor-field',
  templateUrl: './constructor-field.component.html',
  styleUrls: ['./constructor-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConstructorFieldComponent {
  constructor(
    private readonly fieldSandbox: FieldSandbox,
  ) {
    setTimeout(() => {
      this.createTestShape();
    }, 1000);
  }

  items$: Observable<ShapeOnFieldI[]> = this.fieldSandbox.shapes$.pipe(startWith([] as ShapeOnFieldI[]));

  createTestShape() {
    this.fieldSandbox.createShape({
      type: ShapeType.Rectangle,
      width: 50,
      height: 50,
      color: 'green',
    }, { x: 10, y: 10 })
  }
}
