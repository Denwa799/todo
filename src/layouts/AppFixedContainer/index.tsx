import { FC } from 'react';
import { Box } from '@mui/material';
import { IAppFixedContainer } from './types';

export const AppFixedContainer: FC<IAppFixedContainer> = ({
  children,
  top,
  right = 15,
  bottom = 35,
  left,
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top,
        right,
        bottom,
        left,
      }}
    >
      {children}
    </Box>
  );
};
