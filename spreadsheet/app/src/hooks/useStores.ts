import * as React from 'react'
import StoreRoot, { IStores } from '../stores/StoreRoot'
import ContextStores from '../contexts/ContextStores'

/**
 * Retrieve MobX stores from the context.
 */
export function useStores(): IStores & { storeRoot: StoreRoot } {
  const value = React.useContext(ContextStores)

  if (!value.storeRoot) {
    throw new Error(`Root store has not been found`)
  }

  const allStores = {
    ...value.storeRoot.stores,
    storeRoot: value.storeRoot
  }

  return allStores
}
