import { FC } from 'react';
import { Box } from '@mui/material';
import { IAppFixedContainer } from './types';

export const AppFixedContainer: FC<IAppFixedContainer> = ({
  children,
  top,
  right = 25,
  bottom = 25,
  left,
}) => {
  return (
    <Box>
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
    </Box>
  );
};
