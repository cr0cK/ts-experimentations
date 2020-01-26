import { CellCoord } from 'types'

export function buildCellCoord(letter: string, number: number): CellCoord {
  return [letter, String(number)].join(':')
}
