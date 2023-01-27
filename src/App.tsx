import { ThemeProvider } from '@mui/material';
import { theme } from 'constants/theme';
import { MainPage } from 'pages/Main';
import styles from './App.module.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.App}>
        <MainPage />
      </div>
    </ThemeProvider>
  );
};

export default App;
