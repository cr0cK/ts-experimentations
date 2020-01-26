import { useStores } from 'hooks/useStores'
import { observer } from 'mobx-react'
import * as React from 'react'
import styled from 'styled-components'
import GridCell from './GridCell'

interface IGridRowsProps {
  className?: string
}

const GridRows: React.FunctionComponent<IGridRowsProps> = props => {
  const { storeGrid } = useStores()

  return (
    <div attr-name="GridRows" className={props.className}>
      {storeGrid.rows.map(cell => {
        return <GridCell key={cell.coord} cell={cell}></GridCell>
      })}
    </div>
  )
}

const ObserverGridRows = observer(GridRows)

export default styled(ObserverGridRows)`
  display: flex;
  flex-direction: column;
`
