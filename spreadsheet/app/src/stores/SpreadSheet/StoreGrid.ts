import { action, computed, observable } from 'mobx'
import Cell from '../../entities/Cell'
import { CellCoord } from '../../types'
import { ITask } from './types'

export default class StoreGrid {
  private $grid = observable.map<CellCoord, Cell>()

  // @action
  // addTask(task: ITask) {
  //   this.$tasks.set(task.label, task)
  // }

  // @action
  // removeTask(task: ITask) {
  //   this.$tasks.delete(task.label)
  // }

  // @computed
  // get tasks(): ITask[] {
  //   return Array.from(this.$tasks.values())
  // }
}
