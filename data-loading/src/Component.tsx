import * as React from 'react'
import { getData } from 'state'
import { DataCategoryType } from 'types'

interface IComponentProps {
  categoryType: DataCategoryType
}

const Component: React.FunctionComponent<IComponentProps> = props => {
  const data = getData()

  const category = data.fr.categories[props.categoryType]

  return <div>{category.label}</div>
}

export default Component
