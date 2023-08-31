export const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*()_-+[]{}?/.,<>'

export type Range = {
  min: number
  max: number
}

export const UpperCaseRange = { min: 0, max: 25 }
export const LowerCaseRange = { min: 26, max: 51 }
export const numbersRange = { min: 52, max: 61 }
export const symbolsRange = { min: 62, max: 83 }
