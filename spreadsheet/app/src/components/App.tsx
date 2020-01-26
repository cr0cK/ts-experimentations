import ContextStores from 'contexts/ContextStores'
import * as React from 'react'
import StoreRoot from 'stores/StoreRoot'
import styled from 'styled-components'
import 'styles/globals.css'
import 'styles/normalize.css'
import SpreadSheet from './SpreadSheet'

interface IAppProps {
  className?: string
}

const App: React.FunctionComponent<IAppProps> = props => {
  const storeRoot = new StoreRoot()

  // @ts-ignore
  window.ROOT_STORE = storeRoot

  return (
    <ContextStores.Provider value={{ storeRoot: storeRoot }}>
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

  overflow: scroll;
  border: 1px solid blue;
`
