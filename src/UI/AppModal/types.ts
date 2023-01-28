import { ReactNode } from 'react';

export interface IAppModal {
  children: ReactNode;
  classStyle?: string;
  open: boolean;
  onClose: () => void;
}
