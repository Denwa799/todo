import { ChangeEvent } from 'react';

export interface IAppDateInput {
  value: string;
  classStyle?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
