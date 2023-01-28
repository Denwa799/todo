import { FC } from 'react';
import styles from './styles.module.css';
import { IAppDateInput } from './types';

export const AppDateInput: FC<IAppDateInput> = ({
  value,
  classStyle,
  onChange,
}) => {
  return (
    <input
      className={`${styles.AppDateInput} ${classStyle}`}
      value={value}
      required
      onChange={onChange}
      type="date"
      max="2099-12-31"
    />
  );
};
