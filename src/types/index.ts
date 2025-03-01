export interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  closest: Point[];
  active?: number;
}

export interface Target {
  x: number;
  y: number;
}

export interface CircleProps {
  pos: Point;
  radius: number;
  active?: number;
}