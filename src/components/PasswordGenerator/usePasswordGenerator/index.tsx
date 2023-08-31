import { useEffect, useState } from 'react'

import {
  LOWER_CASE_RANGE,
  Range,
  UPPER_CASE_RANGE,
  CHARACTERS,
  INITIAL_CHARACTERS_AMOUNT,
  NUMBERS_RANGE,
  SYMBOLS_RANGE,
} from '../../../utils/constants'

import { OptionsType } from '../../../types/OptionsType'

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('password')

  const [charactersAmount, setCharactersAmount] = useState(
    INITIAL_CHARACTERS_AMOUNT,
  )

  const [options, setOptions] = useState<OptionsType>({
    upperCase: true,
    lowerCase: true,
    symbols: true,
    numbers: true,
  })

  const generatePassword = () => {
    const rangesArray: Range[] = []

    const { upperCase, lowerCase, numbers, symbols } = options

    if (upperCase) rangesArray.push(UPPER_CASE_RANGE)
    if (lowerCase) rangesArray.push(LOWER_CASE_RANGE)
    if (numbers) rangesArray.push(NUMBERS_RANGE)
    if (symbols) rangesArray.push(SYMBOLS_RANGE)

    const getRandomNumber = (min: number, max: number) =>
      Math.round(Math.random() * (max - min) + min)

    const getRandomIndex = (array: Range[]) => {
      const randomNumbersArray = array.map(({ min, max }) =>
        getRandomNumber(min, max),
      )
      const randomIndex =
        randomNumbersArray[getRandomNumber(0, array.length - 1)]

      return randomIndex
    }

    const getNewPassword = () => {
      const newPassword = []
      for (let i = 0; i < charactersAmount; i++) {
        const index = getRandomIndex(rangesArray)

        newPassword.push(CHARACTERS[index])
      }

      return newPassword.join(',').replace(/,/g, '')
    }

    setPassword(getNewPassword())
  }

  useEffect(() => {
    generatePassword()
  }, [charactersAmount, options])

  return {
    charactersAmount,
    options,
    password,
    setCharactersAmount,
    setOptions,
    generatePassword,
  }
}
