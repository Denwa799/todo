import { FormControlLabel } from '@mui/material';
import { FC } from 'react';
import { AppModal } from 'UI/AppModal';
import { AppSwitch } from 'UI/AppSwitch';
import { ISettingsModal } from './types';

export const SettingsModal: FC<ISettingsModal> = ({
  isOpen,
  newsLineIsActive,
  setIsOpen,
  setNewsLineIsActive,
}) => {
  const onSwitchRunningLineActive = () => {
    setNewsLineIsActive((prev) => !prev);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <AppModal open={isOpen} onClose={onClose}>
      <FormControlLabel
        control={
          <AppSwitch
            checked={newsLineIsActive}
            onChange={onSwitchRunningLineActive}
            sx={{ m: 1 }}
          />
        }
        label="News"
      />
    </AppModal>
  );
};
