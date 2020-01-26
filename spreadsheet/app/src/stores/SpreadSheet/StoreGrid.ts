import Cell from 'entities/Cell'
import { buildCellCoord } from 'libs/helpers'
import { range } from 'lodash'
import { computed, observable, toJS } from 'mobx'
import StoreBase from 'stores/StoreBase'
import StoreRoot from 'stores/StoreRoot'
import { CellCoord } from 'types'
import { Maybe } from 'types/helpers'

export default class StoreGrid extends StoreBase {
  private $columns = observable.array<string>(
    'ABC'.split('')
    // 'ABCDEFGHIJKLMNOPQRSTUVWYZ'.split('')
  )
  private $rows = observable.array<number>(range(1, 10))
  private $cells = observable.map<CellCoord, Maybe<Cell>>()

  /**
   * Init the sheet with empty cells.
   */
  constructor(storeRoot: StoreRoot) {
    super(storeRoot)

    this.$columns.forEach(column => {
      this.$rows.forEach(row => {
        this.$cells.set(buildCellCoord(column, row), null)
      })
    })
  }

  /**
   * Return a cell, if defined, from a column and a row.
   */
  getCell(cellColumn: Cell | string, cellRow: Cell | number): Cell {
    const columnValue =
      typeof cellColumn === 'string' ? cellColumn : cellColumn.getValue()

    const rowValue =
      typeof cellRow === 'number' ? cellRow : Number(cellRow.getValue())

    if (!columnValue || !rowValue) {
      return new Cell(buildCellCoord('-', -1))
    }

    const coord = buildCellCoord(columnValue, rowValue)

    return this.$cells.get(coord) || new Cell(coord)
  }

  // @action
  // addTask(task: ITask) {
  //   this.$tasks.set(task.label, task)
  // }

  // @action
  // removeTask(task: ITask) {
  //   this.$tasks.delete(task.label)
  // }

  /* Computed */

  @computed
  get theadColumns(): Cell[] {
    return [new Cell(buildCellCoord('-', 0)).setValue(''), ...this.columns]
  }

  @computed
  get columns(): Cell[] {
    return this.$columns.map((column, i) =>
      new Cell(buildCellCoord('-', i + 1)).setValue(column)
    )
  }

  @computed
  get rows(): Cell[] {
    return this.$columns.map((column, i) =>
      new Cell(buildCellCoord('-', i + 1)).setValue(i + 1)
    )
  }
}
