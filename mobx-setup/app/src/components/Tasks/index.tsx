import * as React from 'react'
import TasksList from './TasksList'
import TaskForm from './TaskForm'

interface ITasksProps {}

const Tasks: React.FunctionComponent<ITasksProps> = props => {
  return (
    <div>
      <h1>Tasks</h1>

      <TasksList />
      <TaskForm />
    </div>
  )
}

export default Tasks
