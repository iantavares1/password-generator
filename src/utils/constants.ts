export const CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*()_-+[]{}?/.,<>'

export const INITIAL_CHARACTERS_AMOUNT = 30

export type Range = {
  min: number
  max: number
}

export const UPPER_CASE_RANGE: Range = { min: 0, max: 25 }
export const LOWER_CASE_RANGE: Range = { min: 26, max: 51 }
export const NUMBERS_RANGE: Range = { min: 52, max: 61 }
export const SYMBOLS_RANGE: Range = { min: 62, max: 83 }
