import { Box, Slider, Typography, useTheme } from '@mui/material'

import { INITIAL_CHARACTERS_AMOUNT } from '../../../utils/constants'

type CharactersNumberProps = {
  charactersAmount: number
  onSliderChange: React.Dispatch<React.SetStateAction<number>>
}

export const CharactersNumber = ({
  charactersAmount,
  onSliderChange,
}: CharactersNumberProps) => {
  const theme = useTheme()

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    onSliderChange(newValue as number)
  }

  return (
    <Box
      sx={{
        p: theme.spacing(2),
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[5],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(2),
      }}
    >
      <Typography variant="h5">Characters number</Typography>
      <Box
        sx={{
          width: '100%',
          px: theme.spacing(2),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4" sx={{ width: theme.spacing(8) }}>
          {charactersAmount}
        </Typography>
        <Slider
          defaultValue={INITIAL_CHARACTERS_AMOUNT}
          min={8}
          sx={{ width: '100%' }}
          onChange={handleSliderChange}
        />
      </Box>
    </Box>
  )
}
