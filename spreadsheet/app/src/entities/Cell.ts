import { CellCoord } from './../types/index'
import { Maybe } from 'types/helpers'

export default class Cell {
  private $value: Maybe<string> = null

  constructor(public readonly coord: CellCoord) {}

  setValue(value: string | number): this {
    this.$value = typeof value === 'number' ? String(value) : value
    return this
  }

  getValue(): Maybe<string> {
    return this.$value
  }
}
