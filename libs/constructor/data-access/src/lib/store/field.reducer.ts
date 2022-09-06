import { formShapeId, ShapeOnFieldI } from '@brickber/constructor/util';
import { Action, createReducer, on } from '@ngrx/store';
import { createShape, toggleShapeSelection } from './field.actions';

export interface FieldStateI {
  shapes: ShapeOnFieldI[];
  selectedShapeIds: Set<string>;
}

export const initialState: FieldStateI = {
  shapes: [],
  selectedShapeIds: new Set<string>(),
};

const _fieldReducer = createReducer<FieldStateI>(
  initialState,
  on(createShape, (state, { shape, coords }) => {
    const _id = formShapeId(shape);
    return {
      ...state,
      shapes: [...state.shapes, { _id, ...shape, coords }]
    }
  }),
  on(toggleShapeSelection, (state, { id, flag }) => {
    const selectedIdsList = [...state.selectedShapeIds.values()];
    const selectedShapeIds = new Set(
      flag ? [...selectedIdsList, id] : selectedIdsList.filter((item) => item !== id),
    );

    return {
      ...state,
      selectedShapeIds,
    }
  }),
);

export function fieldReducer(state: FieldStateI, action: Action) {
  return _fieldReducer(state, action);
}
