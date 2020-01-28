import {
  GridCellCoord,
  GridCellType,
  GridCellValue,
  IGridCellCoord
} from 'types'
import GridCell from './GridCell'
import { buildGridCellCoord } from './helpers.ts/buildGridCellCoord'

export default class Grid {
  private $grid: Map<GridCellCoord, GridCell> = new Map()

  setGridCell(gridCellCoordObj: IGridCellCoord, gridCell: GridCell): void {
    this.$grid.set(buildGridCellCoord(gridCellCoordObj), gridCell)
  }

  getGridCell(gridCellCoordObj: IGridCellCoord): GridCell {
    return (
      this.$grid.get(buildGridCellCoord(gridCellCoordObj)) ||
      new GridCell(null, GridCellType.number)
    )
  }

  getCellValue(cellCoordObj: IGridCellCoord): GridCellValue {
    const cellGrid = this.getGridCell(cellCoordObj)
    return cellGrid.getValue()
  }
}
