import StoreGrid from './SpreadSheet/StoreGrid'

export interface IStores {
  storeGrid: StoreGrid
}

export default class StoreRoot {
  private $stores: IStores = {
    storeGrid: new StoreGrid(this)
  }

  get stores(): IStores {
    return this.$stores
  }
}
