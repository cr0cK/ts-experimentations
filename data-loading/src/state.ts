import { parseData } from 'parseData.js'
import { IData, IData2 } from 'types.js'
import * as data from '../data/data_gui.json'

/**
 * Unsafe function until it checks data integrity with a JSON schema.
 * If the JSON schema check is successful, let's say that `data` is of type IData.
 */
export function getData(): IData {
  // TODO check here data with a JSON schema to verify data integrity

  return (data as unknown) as IData
}

/**
 * Same, using the custom parser.
 */
export function getData2(): IData2 {
  return parseData()
}
