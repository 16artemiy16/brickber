export enum ShapeType {
  Rectangle = 'rectangle',
  Triangle = 'triangle',
  Circle = 'circle',
}

export const ALL_SHAPES = [ShapeType.Rectangle, ShapeType.Triangle, ShapeType.Circle];

export interface ShapeI {
  type: ShapeType,
  width: number;
  height: number;
  color: string;
  borderColor?: string;
  borderWidth?: string;
  // TODO: improve it
  borderStyle?: string;
}

export interface CoordsI {
  x: number;
  y: number;
}

export interface ShapeOnFieldI extends ShapeI {
  _id: string;
  coords: CoordsI;
}

export const formShapeId = (data: { type: ShapeType }): string => `${data.type}__${new Date()}`;
