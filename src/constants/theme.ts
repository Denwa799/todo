import { createTheme } from '@mui/material';

export const THEME = {
  backgroundColor1: '#222222',
  backgroundColor2: '#282828',

  primaryColor1: '#f4f4f4',
  primaryColor2: '#a9a9a9',

  redColor1: '#ff0000',
  blueColor1: '#366eff',
  yellowColor1: '#ffeb33',
  greenColor1: '#10c200',

  shadow1:
    '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05);',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: THEME.primaryColor1,
    },
  },
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: 600,
      letterSpacing: 1,
    },
    body1: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: 1,
    },
    body2: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: 1,
    },
    fontFamily: 'Actor, sans-serif',
  },
});
