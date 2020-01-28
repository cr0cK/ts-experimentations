import { GridCellType } from './../types'
import GridCell from './GridCell'

export function replaceQL(instruction: string): string {
  return (
    instruction
      // $A1 ; $Z99
      .replace(
        /\$([A-Z])([1-9]+)/g,
        `grid.getCellValue({ column: '$1', row: $2 })`
      )

    // // 42
    // .replace(/(\d+)/g, `(new GridCell('$1', GridCellType.number)).getValue()`)
    // .replace(/(\d+)/g, found => {
    //   console.log('f?', found)
    //   return 'lol'
    // })
  )

  // =$A1+10

  // =($A1+$A2)/$B3

  // =($A1+$A2)/$B3+10
}

export function execQL(instruction: string): GridCell {
  replaceQL(instruction)

  return new GridCell('42', GridCellType.number)
}
