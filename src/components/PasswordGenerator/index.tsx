import { usePasswordGenerator } from './usePasswordGenerator'

import { Password } from './Password'
import { Options } from './Options'
import { CharactersNumber } from './CharactersNumber'

import { Box, useTheme } from '@mui/material'

export const PasswordGenerator = () => {
  const theme = useTheme()

  const {
    charactersAmount,
    options,
    password,
    setCharactersAmount,
    setOptions,
    generatePassword,
  } = usePasswordGenerator()

  return (
    <Box
      sx={{
        width: '100%',
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
      }}
    >
      <Password password={password} onClick={generatePassword} />
      <CharactersNumber
        charactersAmount={charactersAmount}
        onSliderChange={setCharactersAmount}
      />
      <Options options={options} setOptions={setOptions} />
    </Box>
  )
}
