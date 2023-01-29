import { SxProps } from '@mui/material';

export interface IAppSwitch {
  checked: boolean;
  disabled?: boolean;
  sx?: SxProps;
  onChange: () => void;
}
