import * as React from 'react'
import styled from 'styled-components'
import { ITask } from 'stores/Tasks/types'
import { useStores } from 'hooks/useStores'
import TaskLabel from './TaskLabel'
import TaskStatus from './TaskStatus'
import { onTasksDeleteButtonClick } from './handlers'

interface ITaskItemProps {
  className?: string
  task: ITask
}

const TaskItem: React.FunctionComponent<ITaskItemProps> = props => {
  const { tasksStore } = useStores()

  return (
    <div className={props.className}>
      <TaskLabel>{props.task.label}</TaskLabel>
      <TaskStatus done={props.task.done} />

      <input
        type="button"
        value="Delete"
        onClick={onTasksDeleteButtonClick(tasksStore)(props.task)}
      />
    </div>
  )
}

export default styled(TaskItem)`
  display: flex;
  justify-content: space-between;
`
