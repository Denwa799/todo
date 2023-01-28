import { FC } from 'react';
import styles from './styles.module.css';
import { IAppScrollContainer } from './types';

export const AppScrollContainer: FC<IAppScrollContainer> = ({ children }) => {
  return <div className={styles.AppScrollContainer}>{children}</div>;
};
