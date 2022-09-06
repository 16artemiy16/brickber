import { Injectable } from '@angular/core';
import { map, Observable, of, take } from 'rxjs';
import { CoordsI, ShapeI, ShapeOnFieldI } from '@brickber/constructor/util';
import { Store } from '@ngrx/store';
import { FieldStateI } from './field.reducer';
import { selectIsShapeSelected, selectSelectedShapeIds, selectShapes } from './field.selectors';
import { createShape, removeShape, toggleShapeSelection } from './field.actions';

@Injectable()
export class FieldSandbox {
  constructor(
    private readonly store: Store<FieldStateI>
  ) {
  }

  shapes$: Observable<ShapeOnFieldI[]> = this.store.select(selectShapes);
  selectedShapeIds$: Observable<Set<string>> = this.store.select(selectSelectedShapeIds);

  isShapeSelected$(id: string): Observable<boolean> {
    return this.store.select(selectIsShapeSelected(id));
  }

  createShape(shape: ShapeI, coords: CoordsI): void {
    this.store.dispatch(createShape({ shape, coords }));
  }

  toggleShapeSelection(id: string, flag?: boolean): void {
    const valueToSet$ = flag
      ? of(flag)
      : this.selectedShapeIds$.pipe(
          take(1),
          map((ids) => !ids.has(id))
        )
    valueToSet$
      .subscribe((value) => {
        this.store.dispatch(toggleShapeSelection({ id, flag: value }));
      });

  }

  removeShape(id: string): void {
    this.store.dispatch(removeShape({ id }));
  }
}
