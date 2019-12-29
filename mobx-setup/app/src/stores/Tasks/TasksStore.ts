import { observable, action, computed } from 'mobx'
import { ITask } from './types'

export default class TasksStore {
  private $tasks = observable.map<string, ITask>()

  @action
  addTask(task: ITask) {
    this.$tasks.set(task.label, task)
  }

  @action
  removeTask(task: ITask) {
    this.$tasks.delete(task.label)
  }

  @computed
  get tasks(): ITask[] {
    return Array.from(this.$tasks.values())
  }
}
