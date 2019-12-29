import * as React from 'react'
import styled from 'styled-components'

interface IFormProps {
  className?: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FunctionComponent<IFormProps> = props => {
  return (
    <form className={props.className} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}

export default styled(Form)`
  width: 500px;

  > div {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
`
