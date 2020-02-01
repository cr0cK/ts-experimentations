import * as React from 'react'
import { Maybe } from 'types/common'
import RootStore from 'stores/RootStore'

export interface IContextStores {
  rootStore: Maybe<RootStore>
}

const ContextStores = React.createContext<IContextStores>({ rootStore: null })

export default ContextStores
