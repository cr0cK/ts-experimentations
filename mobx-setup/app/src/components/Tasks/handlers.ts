import FormStore from 'stores/Tasks/FormStore'
import TasksStore from 'stores/Tasks/TasksStore'
import { ITask } from 'stores/Tasks/types'

/**
 * Add a task.
 */
export const onAddTaskSubmit = (
  formStore: FormStore,
  tasksStore: TasksStore
) => (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const label = formStore.getFieldValue('label')
  const done = formStore.getFieldValueAsBoolean('done')

  if (!label) {
    return
  }

  tasksStore.addTask({ label, done })

  formStore.reset()
}

/**
 * Remove a task.
 */
export const onTasksDeleteButtonClick = (tasksStore: TasksStore) => (
  task: ITask
) => () => {
  tasksStore.removeTask(task)
}
