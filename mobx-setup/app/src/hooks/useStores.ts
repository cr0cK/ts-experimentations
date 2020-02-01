import ContextStores from 'contexts/ContextStores'
import * as React from 'react'
import RootStore, { IStores } from 'stores/RootStore'

/**
 * Retrieve MobX stores from the context.
 */
export function useStores(): IStores & { rootStore: RootStore } {
  const value = React.useContext(ContextStores)

  if (!value.rootStore) {
    throw new Error(`Root store has not been found`)
  }

  const allStores = {
    ...value.rootStore.stores(),
    rootStore: value.rootStore
  }

  return allStores
}
