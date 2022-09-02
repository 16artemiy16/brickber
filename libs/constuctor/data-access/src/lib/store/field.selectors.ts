import { createSelector } from '@ngrx/store';
import { FieldStateI } from './field.reducer';

export const selectFeature = (state: Record<string, any>): FieldStateI => state['field'];

export const selectShapes = createSelector(
  selectFeature,
  (state) => state.shapes,
);
