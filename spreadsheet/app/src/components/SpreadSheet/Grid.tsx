import * as React from 'react'
import styled from 'styled-components'
import GridBody from './GridBody'
import GridHead from './GridHead'
import GridRows from './GridRows'

interface IGridProps {
  className?: string
}

const Grid: React.FunctionComponent<IGridProps> = props => {
  return (
    <div attr-name="Grid" className={props.className}>
      <GridHead />

      <div className="gridRows">
        <GridRows />
        <GridBody />
      </div>
    </div>
  )
}

export default styled(Grid)`
  width: 100%;
  border-collapse: collapse;

  .gridRows {
    display: flex;
  }
`
