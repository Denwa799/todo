import { THEME } from 'constants/theme';
import { FC } from 'react';
import { IAppVerticalLine } from './types';
import styles from './styles.module.css';

export const AppVerticalLine: FC<IAppVerticalLine> = ({
  color = THEME.primaryColor2,
  width = 5,
  height = 40,
  borderRadius = 3,
}) => {
  return (
    <span
      className={styles.AppVerticalLine}
      style={{ backgroundColor: color, width, height, borderRadius }}
    />
  );
};
