import { FC, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { IAppRunningLine } from './types';
import styles from './styles.module.css';

export const AppRunningLine: FC<IAppRunningLine> = ({ text, duration }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const pixelNumberPerOneCharacter = 8;
  const millisecondsPerOneCharacter = 500;

  const animation = [
    { transform: 'translateX(100%)' },
    { transform: `translateX(-${text.length * pixelNumberPerOneCharacter}px)` },
  ];

  const animationDuration = {
    duration: duration || millisecondsPerOneCharacter * text.length,
    iterations: Infinity,
  };

  useEffect(() => {
    if (contentRef && contentRef.current) {
      contentRef.current.animate(animation, animationDuration);
    }
  }, [contentRef]);

  return (
    <div className={styles.AppRunningLine}>
      <div className={styles.content} ref={contentRef}>
        <Typography variant="body2">{text}</Typography>
      </div>
    </div>
  );
};
