import { FC, useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { AppSettingsIcon } from 'assets/icons/AppSettingsIcon';
import styles from './styles.module.css';
import { SettingsModal } from './SettingsModal';
import { ISettings } from './types';

export const Settings: FC<ISettings> = ({
  newsLineIsActive,
  setNewsLineIsActive,
}) => {
  const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false);

  const onModalOpen = () => {
    setSettingsModalIsOpen(true);
  };

  return (
    <>
      <div className={styles.Settings}>
        <Tooltip title="Settings">
          <IconButton onClick={onModalOpen}>
            <AppSettingsIcon fontSize="inherit" color="primary" />
          </IconButton>
        </Tooltip>
      </div>
      {settingsModalIsOpen && (
        <SettingsModal
          isOpen={settingsModalIsOpen}
          newsLineIsActive={newsLineIsActive}
          setIsOpen={setSettingsModalIsOpen}
          setNewsLineIsActive={setNewsLineIsActive}
        />
      )}
    </>
  );
};
