export enum DataLanguage {
  fr = 'fr',
  en = 'en'
}

export enum DataCategoryType {
  PLT = 'PLT',
  ECO = 'ECO',
  INO = 'INO',
  POL = 'POL',
  HUM = 'HUM'
}

export enum DataColor {
  green = 'green',
  blue = 'blue',
  orchid = 'orchid',
  darkGray = 'darkGray',
  orange = 'orange'
}

export interface IDataSearchBar {
  placeholder: string
}

export interface IDataMenuBar {
  label: string
  icon: string
}

export interface IDataCategory {
  label: string
  color: DataColor
}

export interface IDataConfig {
  searchBar: IDataSearchBar
  menuBar: IDataMenuBar
  categories: {
    [DataCategoryType.PLT]: IDataCategory
    [DataCategoryType.ECO]: IDataCategory
    [DataCategoryType.INO]: IDataCategory
    [DataCategoryType.POL]: IDataCategory
    [DataCategoryType.HUM]: IDataCategory
  }
}

export interface IData {
  [DataLanguage.fr]: IDataConfig
  [DataLanguage.en]: IDataConfig
}

/**
 * Alternative, by using maps with a custom parser (see parseData.ts)
 */

export interface IDataConfig2 {
  searchBar: IDataSearchBar
  menuBar: IDataMenuBar
  categories: Map<DataCategoryType, IDataCategory>
}

export interface IData2 {
  [DataLanguage.fr]: IDataConfig2
  [DataLanguage.en]: IDataConfig2
}
