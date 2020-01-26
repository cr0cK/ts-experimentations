import { useStores } from 'hooks/useStores'
import { observer } from 'mobx-react'
import * as React from 'react'
import styled from 'styled-components'
import GridCell from './GridCell'

export interface IGridBodyProps {
  className?: string
}

export function GridBody(props: IGridBodyProps) {
  const { storeGrid } = useStores()

  return (
    <div attr-name="GridBody" className={props.className}>
      {storeGrid.rows.map(cellRow => {
        return (
          <div
            key={`gridRow-${cellRow.getValue()}`}
            attr-name="GridRows"
            className="gridRows"
          >
            {storeGrid.columns.map(cellColumn => {
              const cell = storeGrid.getCellFromColRow(cellColumn, cellRow)
              return <GridCell key={cell.coord} cell={cell}></GridCell>
            })}
          </div>
        )
      })}
    </div>
  )
}

const ObserverGridBody = observer(GridBody)

export default styled(ObserverGridBody)`
  .gridRows {
    display: flex;
  }
`
