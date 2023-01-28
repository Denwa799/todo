import { FC } from 'react';
import { Button } from '@mui/material';
import { IAppCircleButton } from './types';

export const AppCircleButton: FC<IAppCircleButton> = ({
  children,
  variant = 'contained',
  disabled = false,
  width = 50,
  height = 50,
  fontSize = 40,
  borderRadius = '50%',
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      disabled={disabled}
      sx={{
        minWidth: 10,
        width,
        height,
        fontSize,
        borderRadius,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
