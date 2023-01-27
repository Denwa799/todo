import { ThemeProvider } from '@mui/material';
import { theme } from 'constants/theme';
import { MainPage } from 'pages/Main';
import { QueryClient, QueryClientProvider } from 'react-query';
import styles from './App.module.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div className={styles.App}>
          <MainPage />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
