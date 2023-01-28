import { ReactNode } from 'react';

export interface IAppFixedContainer {
  children: ReactNode;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}
