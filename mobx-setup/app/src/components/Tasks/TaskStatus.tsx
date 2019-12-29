import * as React from 'react'

interface ITaskStatusProps {
  done?: boolean
}

const TaskStatus: React.FunctionComponent<ITaskStatusProps> = props => {
  return <div>{props.done ? '(done)' : ''}</div>
}

export default TaskStatus
