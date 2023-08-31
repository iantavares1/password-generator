import { useContext } from 'react'

import { ThemeContext } from '../../../contexts/ThemeContext'

import { Box, Typography, Switch } from '@mui/material'

const BoxSx = {
  display: 'flex',
  alignItems: 'center',
}

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Box sx={BoxSx}>
      <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
        {theme.palette.mode}
      </Typography>
      <Switch onClick={toggleTheme} />
    </Box>
  )
}
