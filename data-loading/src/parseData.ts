import * as fs from 'fs'
import { get, set } from 'lodash'
import * as path from 'path'
import { IData2 } from 'types'

const dataFilePath = path.join(__dirname, '..', 'data', 'data_gui2.json')

function objectToMap(o: object): Map<any, any> {
  let m = new Map()

  for (let k of Object.keys(o)) {
    if (get(o, k) instanceof Object) {
      m.set(k, objectToMap(get(o, k)))
    } else {
      m.set(k, get(o, k))
    }
  }

  return m
}

/**
 * Custom data loader to transform some objects to map, for easier typings.
 * Normalize input data and return a struct that matches IData2.
 */
export function parseData(): IData2 {
  try {
    const dataContent = fs.readFileSync(dataFilePath, 'utf8')

    // TODO Check data integrity with a JSON schema

    const parsedData = JSON.parse(dataContent)

    // transform categories objects to maps
    Object.keys(parsedData).forEach(language => {
      set(
        parsedData,
        `${language}.categories`,
        objectToMap(get(parsedData, `${language}.categories`))
      )
    })

    return (parsedData as unknown) as IData2
  } catch (err) {
    throw new Error('Cant parse data file: ' + err.message)
  }
}
