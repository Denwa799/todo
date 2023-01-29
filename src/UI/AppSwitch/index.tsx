import { styled, Switch, SwitchProps } from '@mui/material';
import { THEME } from 'constants/theme';
import { FC } from 'react';
import { IAppSwitch } from './types';

const closeIcon = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 14 14"><path fill="${encodeURIComponent(
  THEME.primaryColor2
)}" d="M11.8976 13.1218L6.61086 7.82669L1.32411 13.1218L0.143738 11.9414L5.4388 6.65462L0.143738 1.36787L1.32411 0.1875L6.61086 5.48256L11.8976 0.195813L13.0697 1.36787L7.78293 6.65462L13.0697 11.9414L11.8976 13.1218Z"/></svg>')`;

const checkIcon = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="12" viewBox="0 0 15 12"><path fill="${encodeURIComponent(
  THEME.primaryColor2
)}" d="M14.3938 1.1937L6.47953 11.0892L0.262512 5.90778L1.43553 4.50016L6.2156 8.48293L12.9641 0.0500031L14.3938 1.1937Z"/></svg>')`;

const NewSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))({
  width: 50,
  height: 30,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: THEME.primaryColor1,
      '& + .MuiSwitch-track': {
        backgroundColor: THEME.greenColor1,
        opacity: 1,
        border: 0,
      },
      '& .MuiSwitch-thumb': {
        backgroundImage: checkIcon,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: THEME.primaryColor2,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 25,
    height: 25,
    boxShadow: 'none',
    backgroundImage: closeIcon,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    opacity: 1,
    backgroundColor: THEME.blueColor1,
  },
});

export const AppSwitch: FC<IAppSwitch> = ({
  checked,
  disabled = false,
  sx,
  onChange,
}) => {
  return (
    <NewSwitch
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      sx={sx}
    />
  );
};
