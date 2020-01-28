import { GridCellType, GridCellValue, Maybe } from 'types'
import { assertUnreachable } from './asserts'

export default class GridCell {
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
