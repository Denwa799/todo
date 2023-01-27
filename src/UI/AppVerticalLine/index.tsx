import { THEME } from 'constants/theme';
import { FC } from 'react';
import { IAppVerticalLine } from './types';

export const AppVerticalLine: FC<IAppVerticalLine> = ({
  color = THEME.primaryColor2,
  width = 5,
  height = 40,
  borderRadius = 3,
}) => {
  return (
    <span style={{ backgroundColor: color, width, height, borderRadius }} />
  );
};
