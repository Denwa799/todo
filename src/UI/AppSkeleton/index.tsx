import { FC } from 'react';
import { Skeleton } from '@mui/material';
import { THEME } from 'constants/theme';
import { IAppSkeleton } from './types';

export const AppSkeleton: FC<IAppSkeleton> = ({
  variant = 'rounded',
  animation = 'wave',
  width = '100%',
  height = 100,
}) => {
  const skeletonStyles = {
    backgroundColor: THEME.backgroundColor2,
  };

  return (
    <Skeleton
      variant={variant}
      animation={animation}
      width={width}
      height={height}
      sx={skeletonStyles}
    />
  );
};
