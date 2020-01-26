import * as React from 'react'
import styled from 'styled-components'

interface IGridBodyProps {
  className?: string
}

const GridBody: React.FunctionComponent<IGridBodyProps> = props => {
  return (
    <tbody className={props.className}>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>

      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>

      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>

      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
    </tbody>
  )
}

export default styled(GridBody)`
  td {
    border: 1px solid silver;
  }
`
