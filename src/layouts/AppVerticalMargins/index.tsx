import { FC } from 'react';
import { IAppVerticalMargins } from './types';

export const AppVerticalMargins: FC<IAppVerticalMargins> = ({
  children,
  margin,
}) => {
  return (
    <div style={{ marginTop: margin, marginBottom: margin }}>{children}</div>
  );
};
