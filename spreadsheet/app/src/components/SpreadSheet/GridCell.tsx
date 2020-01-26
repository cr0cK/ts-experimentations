import Cell from 'entities/Cell'
import { observer } from 'mobx-react'
import * as React from 'react'
import styled from 'styled-components'
import { stylesConsts } from 'styles/consts'

export interface IGridCellProps {
  className?: string
  cell: Cell
}

export function GridCell(props: IGridCellProps) {
  return (
    <div attr-name={`GridCell:${props.cell.coord}`} className={props.className}>
      {props.cell.getValue() || <div>{'-'}</div>}
    </div>
  )
}

const ObserverGridCell = observer(GridCell)

export default styled(ObserverGridCell)`
  flex-shrink: 0;
  width: ${stylesConsts.gridCellWidth};
  border: 1px solid silver;
`
