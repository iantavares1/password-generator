import { Box, Slider, Typography, useTheme } from '@mui/material'

type CharactersNumberProps = {
  charactersAmount: number
  INITIAL_CHARACTERS_AMOUNT: number
  handleSliderChange: (_: Event, newValue: number | number[]) => void
}

export const CharactersNumber = ({
  charactersAmount,
  INITIAL_CHARACTERS_AMOUNT,
  handleSliderChange,
}: CharactersNumberProps) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        padding: theme.spacing(3),
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[5],
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(4),
      }}
    >
      <Typography variant="h4">Characters number</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { sm: 'space-between' },
          gap: theme.spacing(2),
        }}
      >
        <Typography variant="h4" sx={{ width: theme.spacing(4) }}>
          {charactersAmount}
        </Typography>
        <Slider
          defaultValue={INITIAL_CHARACTERS_AMOUNT}
          sx={{ width: { sm: 150, md: 300 } }}
          onChange={handleSliderChange}
        />
      </Box>
    </Box>
  )
}
