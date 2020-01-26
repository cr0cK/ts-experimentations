import * as React from 'react'
import styled from 'styled-components'
import Grid from './Grid'

interface ISpreadSheetProps {
  className?: string
}

const SpreadSheet: React.FunctionComponent<ISpreadSheetProps> = props => {
  return (
    <div className={props.className}>
      <Grid />
    </div>
  )
}

export default styled(SpreadSheet)`
  flex-grow: 1;
`
