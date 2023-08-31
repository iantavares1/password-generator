import { Box, Typography, useTheme } from '@mui/material'
import { CustomCheckbox } from './CustomCheckbox'

import { OptionsType } from '../../../types/OptionsType'

type OptionsProps = {
  options: OptionsType
  setOptions: React.Dispatch<React.SetStateAction<OptionsType>>
}

export const Options = ({ options, setOptions }: OptionsProps) => {
  const theme = useTheme()
  const { upperCase, lowerCase, symbols, numbers } = options

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as keyof OptionsType

    if (
      Object.values(options).filter((value) => value === true).length === 1 &&
      options[name]
    )
      return

    setOptions((previous) => ({
      ...previous,
      [name]: !previous[name],
    }))
  }

  return (
    <Box
      sx={{
        padding: theme.spacing(2),
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[5],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: theme.spacing(2),
      }}
    >
      <Typography variant="h5" sx={{ alignSelf: 'center' }}>
        Options
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: theme.spacing(2),
        }}
      >
        <CustomCheckbox
          name="upperCase"
          checked={upperCase}
          onChange={handleCheckBoxChange}
        />
        <CustomCheckbox
          name="lowerCase"
          checked={lowerCase}
          onChange={handleCheckBoxChange}
        />
        <CustomCheckbox
          name="symbols"
          checked={symbols}
          onChange={handleCheckBoxChange}
        />
        <CustomCheckbox
          name="numbers"
          checked={numbers}
          onChange={handleCheckBoxChange}
        />
      </Box>
    </Box>
  )
}
