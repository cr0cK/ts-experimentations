import SubTitle from 'components/Common/SubTitle'
import { useStores } from 'hooks/useStores'
import { observer } from 'mobx-react'
import * as React from 'react'
import TaskItem from './TaskItem'

interface ITasksListProps {}

const TasksList: React.FunctionComponent<ITasksListProps> = props => {
  const { tasksStore } = useStores()

  return (
    <div>
      <SubTitle>List of tasks</SubTitle>

      {!tasksStore.tasks.length && <div>No tasks found!</div>}

      {tasksStore.tasks.map((task, i) => {
        return <TaskItem key={i} task={task} />
      })}
    </div>
  )
}

export default observer(TasksList)
