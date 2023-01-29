import { Box } from '@mui/material';
import { FC } from 'react';
import { AppRunningLine } from 'UI/AppRunningLine';
import { IAppRunningLineFixed } from './types';

export const AppRunningLineFixed: FC<IAppRunningLineFixed> = ({
  text,
  duration,
  top,
  right,
  bottom = 0,
  left,
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        top,
        right,
        bottom,
        left,
      }}
    >
      <AppRunningLine text={text} duration={duration} />
    </Box>
  );
};
