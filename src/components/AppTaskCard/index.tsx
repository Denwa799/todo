import { FC } from 'react';
import { Typography } from '@mui/material';
import { AppSwitch } from 'UI/AppSwitch';
import { AppVerticalLine } from 'UI/AppVerticalLine';
import styles from './styles.module.css';
import { IAppTaskCard } from './types';

export const AppTaskCard: FC<IAppTaskCard> = ({
  task,
  plan,
  onChange,
  onClick,
}) => {
  const titleClassName = `${task.isDone && styles.isChecked} ${styles.text}`;
  const subtitleClassName = `${styles.text} ${styles.subtitle}`;

  const onSwitch = () => {
    onChange(task.id, plan);
  };

  const onTextClick = () => {
    onClick(plan.id, plan.tasks, task);
  };

  return (
    <div className={styles.AppTaskCard}>
      <div className={styles.leftContent}>
        <AppVerticalLine color={task.color} />
        <div className={styles.textContainer} onClick={onTextClick}>
          <Typography className={titleClassName}>{task.name}</Typography>
          <Typography className={subtitleClassName} variant="body2">
            {task.text}
          </Typography>
        </div>
      </div>
      <AppSwitch checked={task.isDone} onChange={onSwitch} />
    </div>
  );
};
