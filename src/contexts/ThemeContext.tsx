import { createContext } from 'react'

import { Theme } from '@mui/material'

type ThemeContextProps = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)
