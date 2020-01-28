import { GridCellCoord, IGridCellCoord } from 'types'

export function buildGridCellCoord(
  gridCellCoordObj: IGridCellCoord
): GridCellCoord {
  return [gridCellCoordObj.column, gridCellCoordObj.row].join(':')
}
