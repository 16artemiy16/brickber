import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoordsI, ShapeI, ShapeOnFieldI } from '@brickber/constuctor/util';
import { Store } from '@ngrx/store';
import { FieldStateI } from './field.reducer';
import { selectShapes } from './field.selectors';
import { createShape, removeShape } from './field.actions';

@Injectable()
export class FieldSandbox {
  constructor(
    private readonly store: Store<FieldStateI>
  ) {
  }

  shapes$: Observable<ShapeOnFieldI[]> = this.store.select(selectShapes);

  createShape(shape: ShapeI, coords: CoordsI): void {
    this.store.dispatch(createShape({ shape, coords }));
  }

  removeShape(id: string): void {
    this.store.dispatch(removeShape({ id }));
  }
}
