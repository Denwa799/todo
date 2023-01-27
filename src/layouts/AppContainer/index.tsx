import { FC } from 'react';
import { Container } from '@mui/material';
import { IAppContainer } from './types';
import styles from './styles.module.css';

export const AppContainer: FC<IAppContainer> = ({ children }) => {
  return (
    <Container className={styles.AppContainer} fixed disableGutters>
      {children}
    </Container>
  );
};
