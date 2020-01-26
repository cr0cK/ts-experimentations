import { useStores } from 'hooks/useStores'
import { observer } from 'mobx-react'
import * as React from 'react'
import styled from 'styled-components'
import GridCell from './GridCell'

interface IGridHeadProps {
  className?: string
}

const GridHead: React.FunctionComponent<IGridHeadProps> = props => {
  const { storeGrid } = useStores()

  return (
    <div attr-name="GridHead" className={props.className}>
      {storeGrid.theadColumns.map(cell => {
        return <GridCell key={cell.coord} cell={cell}></GridCell>
      })}
    </div>
  )
}

const ObserverGridHead = observer(GridHead)

export default styled(ObserverGridHead)`
  display: flex;
`
