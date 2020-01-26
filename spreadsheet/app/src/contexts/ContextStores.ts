import * as React from 'react'
import StoreRoot from 'stores/StoreRoot'
import { Maybe } from 'types/helpers'

export interface IContextStores {
  storeRoot: Maybe<StoreRoot>
}

const ContextStores = React.createContext<IContextStores>({ storeRoot: null })

export default ContextStores
