import { createAction, props } from '@ngrx/store';
import { CoordsI, ShapeI } from '@brickber/constructor/util';

export const createShape = createAction('[Field Action] Create Shape', props<{ shape: ShapeI, coords: CoordsI }>());
export const removeShape = createAction('[Field Action] Remove Shape', props<{ id: string }>());
