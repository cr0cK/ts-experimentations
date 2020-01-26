import { CellCoord } from 'types'

export function buildCellCoord(letter: string, number: number): CellCoord {
  return [letter, String(number)].join(':')
}

export function explodeCellCoord(
  cellCoord: CellCoord
): { letter: string; number: number } {
  const [letter, number] = cellCoord.split(':')
  return { letter, number: Number(number) }
}
