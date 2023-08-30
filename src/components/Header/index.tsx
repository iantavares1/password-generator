import { dark, light } from '../../styles/themes'

import { Box, Switch, Theme, Typography, useTheme } from '@mui/material'

type HeaderProps = {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const Header = ({ setTheme }: HeaderProps) => {
  const theme = useTheme()
  return (
    <>
      <Box
        sx={{ alignSelf: 'flex-end', display: 'flex', alignItems: 'center' }}
      >
        <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
          {theme.palette.mode}
        </Typography>
        <Switch
          onClick={() =>
            setTheme((previous) => (previous === dark ? light : dark))
          }
        />
      </Box>
      <Typography variant="h1">Password Generator</Typography>
    </>
  )
}
