import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldSandbox } from '../../../../../data-access/src/lib/store/field.sandbox';
import { Observable, startWith, take } from 'rxjs';
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
    }, 0);
  }

  items$: Observable<ShapeOnFieldI[]> = this.fieldSandbox.shapes$.pipe(startWith([] as ShapeOnFieldI[]));
  selectedIds$: Observable<Set<string>> = this.fieldSandbox.selectedShapeIds$;

  createTestShape(): void {
    this.fieldSandbox.createShape({
      type: ShapeType.Rectangle,
      borderWidth: '5px',
      borderColor: 'red',
      borderStyle: 'solid',
      width: 390,
      height: 300,
      color: 'lightpink',
    }, { x: 10, y: 10 })
  }

  toggleSelection(id: string): void {
    this.fieldSandbox.toggleShapeSelection(id);
  }
}
