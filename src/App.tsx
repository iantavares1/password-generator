import { useState } from 'react'

import { ThemeContext } from './contexts/ThemeContext'
import { dark, light } from './styles/themes'

import { Header } from './components/Header'
import { PasswordGenerator } from './components/PasswordGenerator'

import { Container, CssBaseline, ThemeProvider } from '@mui/material'

const ContainerSx = {
  maxWidth: 600,
  py: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

function App() {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () =>
    setTheme((previous) => (previous === dark ? light : dark))

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          sx={{
            ...ContainerSx,
            background: theme.palette.background.default,
          }}
        >
          <Header />
          <PasswordGenerator />
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
