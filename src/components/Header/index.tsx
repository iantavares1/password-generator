import { ThemeSwitch } from './ThemeSwitch'
import { Title } from './Title'

import { Box } from '@mui/material'

const BoxSx = {
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
}

export const Header = () => {
  return (
    <Box sx={BoxSx}>
      <Title />
      <ThemeSwitch />
    </Box>
  )
}
