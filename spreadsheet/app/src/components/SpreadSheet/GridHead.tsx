import * as React from 'react'

interface IGridHeadProps {}

const GridHead: React.FunctionComponent<IGridHeadProps> = props => {
  return (
    <thead>
      <tr>
        <th>A</th>
        <th>B</th>
        <th>C</th>
      </tr>
    </thead>
  )
}

export default GridHead
