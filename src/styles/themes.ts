import { createTheme, responsiveFontSizes } from '@mui/material'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    lg: false
    xl: false
  }
}

const defaultThemeConfig = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#FFC300',
        light: '#FFD60A',
        dark: '#FFAA00',
        contrastText: '#000',
      },
      secondary: {
        main: '#001D3D',
        light: '#003566',
        dark: '#000814',
        contrastText: '#FFF',
      },
    },
    typography: {
      fontFamily: 'Inter',
      h1: {
        fontSize: 80,
        fontWeight: 500,
      },
      h3: {
        fontSize: 36,
        fontWeight: 600,
      },
      h4: {
        fontSize: 20,
        fontWeight: 500,
      },
    },
    breakpoints: {
      values: { xs: 0, sm: 360, md: 590 },
    },
  }),
)

export const light = createTheme({
  ...defaultThemeConfig,
  palette: {
    ...defaultThemeConfig.palette,
    mode: 'light',
    background: {
      default: '#DDD',
    },
    text: {
      primary: '#000',
      secondary: '#333',
    },
  },
})

export const dark = createTheme({
  ...defaultThemeConfig,
  palette: {
    ...defaultThemeConfig.palette,
    mode: 'dark',
    background: {
      default: '#222',
    },
    text: {
      primary: '#FFF',
      secondary: '#CCC',
    },
  },
})
