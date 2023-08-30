import { usePasswordGenerator } from './usePasswordGenerator'

import { Password } from './Password'
import { Options } from './Options'
import { CharactersNumber } from './CharactersNumber'

import { Box, useTheme } from '@mui/material'

export const PasswordGenerator = () => {
  const theme = useTheme()

  const {
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
  } = usePasswordGenerator()

  return (
    <Box
      sx={{
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(4),
      }}
    >
      <Password
        password={password}
        handleCopy={handleCopy}
        generatePassword={generatePassword}
      />
      <CharactersNumber
        charactersAmount={charactersAmount}
        INITIAL_CHARACTERS_AMOUNT={INITIAL_CHARACTERS_AMOUNT}
        handleSliderChange={handleSliderChange}
      />
      <Options
        handleUpperCaseCheckBoxChange={handleUpperCaseCheckBoxChange}
        handleLowerCaseCheckBoxChange={handleLowerCaseCheckBoxChange}
        handleSymbolsCheckBoxChange={handleSymbolsCheckBoxChange}
        handleNumbersCheckBoxChange={handleNumbersCheckBoxChange}
      />
    </Box>
  )
}
