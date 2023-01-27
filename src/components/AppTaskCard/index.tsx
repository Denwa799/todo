import { Typography } from '@mui/material';
import { FC } from 'react';
import { AppSwitch } from 'UI/AppSwitch';
import { AppVerticalLine } from 'UI/AppVerticalLine';
import styles from './styles.module.css';
import { IAppTaskCard } from './types';

export const AppTaskCard: FC<IAppTaskCard> = ({
  title,
  subtitle,
  checked = false,
  onChange,
}) => {
  const titleClassName = `${checked && styles.isChecked} ${styles.text}`;
  const subtitleClassName = `${styles.text} ${styles.subtitle}`;

  return (
    <div className={styles.AppTaskCard}>
      <div className={styles.leftContent}>
        <AppVerticalLine />
        <div className={styles.textContainer}>
          <Typography className={titleClassName}>{title}</Typography>
          <Typography className={subtitleClassName} variant="body2">
            {subtitle}
          </Typography>
        </div>
      </div>
      <AppSwitch checked={checked} onChange={onChange} />
    </div>
  );
};
