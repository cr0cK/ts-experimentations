import ContextStores from 'contexts/ContextStores'
import * as React from 'react'
import RootStore from 'stores/RootStore'
import styled from 'styled-components'
import SpreadSheet from './SpreadSheet'

interface IAppProps {
  className?: string
}

const App: React.FunctionComponent<IAppProps> = props => {
  const rootStore = new RootStore()

  // @ts-ignore
  window.ROOT_STORE = rootStore

  return (
    <ContextStores.Provider value={{ rootStore: rootStore }}>
      <div className={props.className}>
        <SpreadSheet />
      </div>
    </ContextStores.Provider>
  )
}

export default styled(App)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;

  height: 100%;

  display: flex;
  flex-direction: column;
`
