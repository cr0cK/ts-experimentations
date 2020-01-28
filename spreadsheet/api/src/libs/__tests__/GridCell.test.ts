import GridCell from 'libs/GridCell'
import { GridCellType } from 'types'

describe('GridCell', () => {
  beforeEach(() => {})

  it('should return the value of a cell', () => {
    expect(new GridCell('42', GridCellType.number).getValue()).toBe(42)
  })

  // describe('Query language', () => {
  //   describe('Number', () => {
  //     it('should set a number as the value in a cell', () => {
  //       const ql = '42'

  //       const gridCell = execQL('42')

  //       it('should return 0 if the cell is null', () => {
  //         expect(gridCell.getValue()).toBe(42)
  //       })
  //     })
  //   })
  // })
})
