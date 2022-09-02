import { formShapeId, ShapeOnFieldI } from '@brickber/constuctor/util';
import { Action, createReducer, on } from '@ngrx/store';
import { createShape } from './field.actions';

export interface FieldStateI {
  shapes: ShapeOnFieldI[];
}

export const initialState: FieldStateI = {
  shapes: []
};

const _fieldReducer = createReducer<FieldStateI>(
  initialState,
  on(createShape, (state, { shape, coords }) => {
    const _id = formShapeId(shape);
    return {
      ...state,
      shapes: [...state.shapes, { _id, ...shape, coords }]
    }
  })
);

export function fieldReducer(state: FieldStateI, action: Action) {
  return _fieldReducer(state, action);
}
