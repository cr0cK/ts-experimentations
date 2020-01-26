import * as React from 'react'
import RootStore from 'stores/RootStore'
import { Maybe } from 'types/helpers'

export interface IContextStores {
  rootStore: Maybe<RootStore>
}

const ContextStores = React.createContext<IContextStores>({ rootStore: null })

export default ContextStores
