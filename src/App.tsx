import { createTheme, ThemeProvider } from '@mui/material';
import { THEME } from 'constants/theme';
import { MainPage } from 'pages/Main';
import styles from './App.module.css';

const App = () => {
  const theme = createTheme({
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

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.App}>
        <MainPage />
      </div>
    </ThemeProvider>
  );
};

export default App;
