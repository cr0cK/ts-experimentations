import * as React from 'react'
import { getData2 } from 'state'
import { DataCategoryType } from 'types'

interface IComponentProps {
  categoryType: DataCategoryType
}

const Component: React.FunctionComponent<IComponentProps> = props => {
  const data = getData2()

  const category = data.fr.categories.get(props.categoryType)

  // map getters can return a null value
  if (!category) {
    return <div className="error">Category not found</div>
  }

  return <div>{category.label}</div>
}

export default Component
