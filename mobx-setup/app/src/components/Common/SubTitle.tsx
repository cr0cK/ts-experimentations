import * as React from 'react'

interface ISubTitleProps {}

const SubTitle: React.FunctionComponent<ISubTitleProps> = props => {
  return <h2>{props.children}</h2>
}

export default SubTitle
