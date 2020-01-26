import * as React from 'react'
import GridBody from './GridBody'
import GridHead from './GridHead'
import styled from 'styled-components'

interface IGridProps {
  className?: string
}

const Grid: React.FunctionComponent<IGridProps> = props => {
  return (
    <table className={props.className}>
      <GridHead />
      <GridBody />
    </table>
  )
}

export default styled(Grid)`
  width: 100%;
  border-collapse: collapse;
`
