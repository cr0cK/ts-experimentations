export type Maybe<T> = T | null

export interface IGridCellCoord {
  column: string
  row: number
}

export type GridCellCoord = string

export type GridCellValue = number

export enum GridCellType {
  // string = 'string',
  number = 'number'
}
