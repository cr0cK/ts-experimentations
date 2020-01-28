import Grid from 'libs/Grid'
import GridCell from 'libs/GridCell'
import { GridCellType } from 'types'

describe('Grid', () => {
  let grid: Grid

  beforeEach(() => {
    grid = new Grid()
  })

  describe('getCellValue', () => {
    it('should return the cell value', () => {
      grid.setGridCell(
        { column: 'A', row: 1 },
        new GridCell('10', GridCellType.number)
      )

      expect(grid.getCellValue({ column: 'A', row: 1 })).toBe(10)
    })

    it('should return 0 if the cell is null', () => {
      expect(grid.getCellValue({ column: 'A', row: 1 })).toBe(0)
    })
  })
})
