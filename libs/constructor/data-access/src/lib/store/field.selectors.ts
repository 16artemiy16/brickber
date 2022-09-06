import { createSelector } from '@ngrx/store';
import { FieldStateI } from './field.reducer';

export const selectFeature = (state: Record<string, any>): FieldStateI => state['field'];

export const selectShapes = createSelector(
  selectFeature,
  (state) => state.shapes,
);

export const selectSelectedShapeIds = createSelector(
  selectFeature,
  (state) => state.selectedShapeIds,
);

export const selectIsShapeSelected = (id: string) => createSelector(
  selectFeature,
  (state) => state.selectedShapeIds.has(id),
);
