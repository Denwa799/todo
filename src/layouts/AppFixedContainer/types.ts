import { ReactNode } from 'react';

export interface IAppFixedContainer {
  children: ReactNode;
  top?: number | 'auto';
  right?: number | 'auto';
  bottom?: number | 'auto';
  left?: number | 'auto';
}
