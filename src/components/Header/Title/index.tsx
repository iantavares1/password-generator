import { Box, Typography } from '@mui/material'

const TypographySx = {
  fontFamily: 'Charmonman',
}

export const Title = () => {
  return (
    <Box>
      <Typography variant="h3" sx={TypographySx}>
        Password
      </Typography>
      <Typography variant="h3" sx={TypographySx}>
        Generator
      </Typography>
    </Box>
  )
}
