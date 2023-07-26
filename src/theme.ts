import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3361FF',
    },
    secondary: {
      main: '#8833FF',
    },
    grey: {
      400: '#FAFBFC', // for background
      500: '#ADB8CC', // for text
      600: '#C3CAD9', // for icons
      700: '#6B7A99', // for plain text
      800: '#4D5E80', // for name of person
      900: '#EDEFF2', // for btn square
    },
  },
})
