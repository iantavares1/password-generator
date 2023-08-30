import { useEffect, useState } from 'react'

const INITIAL_CHARACTERS_AMOUNT = 30

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('password')

  const [charactersAmount, setCharactersAmount] = useState(
    INITIAL_CHARACTERS_AMOUNT,
  )

  const [hasUpperCase, setHasUpperCase] = useState(true)
  const [hasLowerCase, setHasLowerCase] = useState(true)
  const [hasSymbols, setHasSymbols] = useState(true)
  const [hasNumbers, setHasNumbers] = useState(true)

  const handleUpperCaseCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHasUpperCase(event.target.checked)
  }

  const handleLowerCaseCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHasLowerCase(event.target.checked)
  }

  const handleSymbolsCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHasSymbols(event.target.checked)
  }

  const handleNumbersCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHasNumbers(event.target.checked)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
  }

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setCharactersAmount(newValue as number)
  }

  const generatePassword = () => {
    type Range = {
      min: number
      max: number
    }

    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*()-+[]{}?/.,<>'

    const UpperCaseRange = { min: 0, max: 25 }
    const LowerCaseRange = { min: 26, max: 51 }
    const numbersRange = { min: 52, max: 61 }
    const symbolsRange = { min: 62, max: 82 }

    const rangesArray: Range[] = []

    if (hasUpperCase) rangesArray.push(UpperCaseRange)
    if (hasLowerCase) rangesArray.push(LowerCaseRange)
    if (hasNumbers) rangesArray.push(numbersRange)
    if (hasSymbols) rangesArray.push(symbolsRange)

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

        newPassword.push(characters[index])
      }

      return newPassword.join(',').replace(/,/g, '')
    }

    setPassword(getNewPassword())
  }

  useEffect(() => {
    generatePassword()
  }, [charactersAmount, hasUpperCase, hasLowerCase, hasSymbols, hasNumbers])

  return {
    password,
    handleCopy,
    generatePassword,
    charactersAmount,
    INITIAL_CHARACTERS_AMOUNT,
    handleSliderChange,
    handleUpperCaseCheckBoxChange,
    handleLowerCaseCheckBoxChange,
    handleSymbolsCheckBoxChange,
    handleNumbersCheckBoxChange,
  }
}
