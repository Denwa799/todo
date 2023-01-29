import { FC } from 'react';
import { Typography } from '@mui/material';
import { IAppHeadBar } from './types';
import styles from './styles.module.css';

export const AppHeadBar: FC<IAppHeadBar> = ({ children, title }) => {
  return (
    <div className={styles.AppHeadBar}>
      <Typography variant="h1">{title}</Typography>
      {children}
    </div>
  );
};
