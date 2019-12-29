import TasksStore from './Tasks/TasksStore'

export interface IStores {
  tasksStore: TasksStore
}

export default class RootStore {
  private $stores: IStores = {
    tasksStore: new TasksStore()
  }

  public stores(): IStores {
    return this.$stores
  }
}
