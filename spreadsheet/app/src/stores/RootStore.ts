import StoreGrid from './SpreadSheet/StoreGrid'

export interface IStores {
  storeGrid: StoreGrid
}

export default class RootStore {
  private $stores: IStores = {
    storeGrid: new StoreGrid()
  }

  get stores(): IStores {
    return this.$stores
  }
}
