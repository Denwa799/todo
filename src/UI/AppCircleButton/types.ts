import { ReactNode } from 'react';

export interface IAppCircleButton {
  children: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
  width?: number;
  height?: number;
  borderRadius?: string | number;
  fontSize?: number;
  onClick: () => void;
}
