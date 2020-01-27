import { Maybe } from 'types'

/**
 * Allow to implement all cases of a switch statement.
 * Credit: https://stackoverflow.com/a/39419171/2743091
 */
export function assertUnreachable(x: Maybe<never>): never {
  throw new Error(`Didn't expect to get here (${x})`)
}
