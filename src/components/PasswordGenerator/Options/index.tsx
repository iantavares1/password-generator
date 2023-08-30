import { Box, Checkbox, Typography, useTheme } from '@mui/material'

type OptionsProps = {
  handleUpperCaseCheckBoxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void
  handleLowerCaseCheckBoxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void
  handleSymbolsCheckBoxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void
  handleNumbersCheckBoxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void
}

export const Options = ({
  handleUpperCaseCheckBoxChange,
  handleLowerCaseCheckBoxChange,
  handleSymbolsCheckBoxChange,
  handleNumbersCheckBoxChange,
}: OptionsProps) => {
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
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: theme.spacing(3),
      }}
    >
      <Typography variant="h4">Options</Typography>
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}
      >
        <Checkbox defaultChecked onChange={handleUpperCaseCheckBoxChange} />
        <Typography variant="h4">Upper Case</Typography>
      </Box>
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}
      >
        <Checkbox defaultChecked onChange={handleLowerCaseCheckBoxChange} />
        <Typography variant="h4">Lower Case</Typography>
      </Box>
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}
      >
        <Checkbox defaultChecked onChange={handleSymbolsCheckBoxChange} />
        <Typography variant="h4">Symbols</Typography>
      </Box>
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}
      >
        <Checkbox defaultChecked onChange={handleNumbersCheckBoxChange} />
        <Typography variant="h4">Numbers</Typography>
      </Box>
    </Box>
  )
}
