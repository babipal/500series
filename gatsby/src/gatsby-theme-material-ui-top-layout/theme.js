import { createMuiTheme, colors } from '@material-ui/core';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5e5e5e',
      main: `#393939`,
      dark: '#111',
    },
    secondary: {
      main: `#19857b`,
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: `#fff`,
    },
  },
  typography: {
    h2: {
      fontSize: '2rem',
      lineHeight: 2,
    },
    h3: {
      fontSize: '1.2rem',
    },
    h5: {
      fontSize: '1rem',
    },
  },
});

export default theme;
