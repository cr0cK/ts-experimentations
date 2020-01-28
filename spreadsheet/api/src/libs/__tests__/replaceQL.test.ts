import { replaceQL } from 'libs/execQL'

describe.only('replaceQL', () => {
  // it('should replace numbers', () => {
  //   const result = replaceQL('42')
  //   expect(result).toBe(`(new GridCell('42', GridCellType.number)).getValue()`)
  // })

  it('should replace references to another cells', () => {
    const result = replaceQL('$A1')
    expect(result).toBe(`grid.getCellValue({ column: 'A', row: 1 })`)
  })

  it('should replace references to another cells', () => {
    const result = replaceQL('$A1+$B2')
    expect(result).toBe(
      `grid.getCellValue({ column: 'A', row: 1 })+grid.getCellValue({ column: 'B', row: 2 })`
    )
  })
})
