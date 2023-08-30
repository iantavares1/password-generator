import { useState } from 'react'

import { Header } from './components/Header'
import { PasswordGenerator } from './components/PasswordGenerator'

import { dark } from './styles/themes'

import { Container, CssBaseline, ThemeProvider } from '@mui/material'

function App() {
  const [theme, setTheme] = useState(dark)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          background: theme.palette.background.default,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Header setTheme={setTheme} />
        <PasswordGenerator />
      </Container>
    </ThemeProvider>
  )
}

export default App
