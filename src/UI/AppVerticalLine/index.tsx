import { FC } from 'react';
import { THEME } from 'constants/theme';
import { checkStringHexColor } from 'utils/regExp/checkStringHexColor';
import { IAppVerticalLine } from './types';
import styles from './styles.module.css';

export const AppVerticalLine: FC<IAppVerticalLine> = ({
  color = THEME.primaryColor2,
  width = 5,
  height = 40,
  borderRadius = 3,
}) => {
  const backgroundColor = checkStringHexColor(color)
    ? color
    : THEME.primaryColor2;

  return (
    <span
      className={styles.AppVerticalLine}
      style={{
        backgroundColor,
        width,
        height,
        borderRadius,
      }}
    />
  );
};
