import * as React from 'react'
import styled from 'styled-components'

interface ITaskLabelProps {
  className?: string
  done?: boolean
}

const TaskLabel: React.FunctionComponent<ITaskLabelProps> = props => {
  return <div className={props.className}>{props.children}</div>
}

export default styled(TaskLabel)`
  text-decoration: ${props => (props.done === true ? 'line-through' : '')};
`
