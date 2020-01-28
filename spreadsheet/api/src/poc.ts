import { Maybe } from 'types'
import { assertUnreachable } from './libs/asserts'

// tslint:disable:no-eval
// tslint:disable:max-classes-per-file

function buildGridCellCoord(gridCellCoordObj: IGridCellCoord): GridCellCoord {
  return [gridCellCoordObj.column, gridCellCoordObj.row].join(':')
}

class GridCell {
  constructor(private $value: Maybe<string>, private $type: GridCellType) {}

  getValue(): GridCellValue {
    switch (this.$type) {
      // case GridCellType.string:
      //   return this.$value || ''

      case GridCellType.number:
        return Number(this.$value || 0)

      default:
        assertUnreachable(this.$type)
    }
  }
}

class Grid {
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

const grid = new Grid()

grid.setGridCell(
  { column: 'A', row: 1 },
  new GridCell('10', GridCellType.number)
)

const cases = [
  // 42
  eval(`(new GridCell('42', GridCellType.number)).getValue()`),

  // 'foo'
  // eval(`(new GridCell('foo', GridCellType.string)).getValue()`),

  // =$A1
  eval(`grid.getCellValue({ column: 'A', row: 1 })`),

  // =$A1+42
  eval(
    `grid.getCellValue({ column: 'A', row: 1 }) + (new GridCell('42', GridCellType.number)).getValue()`
  )

  // =$A1+$A2
  // eval(grid.getCell('A', 1) + grid.getCell('A', 2))

  // =($A1+$A2)/$B3
  // eval((grid.getCell('A', 1) + grid.getCell('A', 2)) / grid.getCell('B', 3))

  // =`Math.round($A1)`
  // eval(Math.round(grid.getCell('A', 1))
].forEach(result => {
  console.log('result?', result)
})
