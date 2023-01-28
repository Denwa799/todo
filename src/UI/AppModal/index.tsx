import { Button, Modal } from '@mui/material';
import { AppCloseIcon } from 'assets/icons/AppCloseIcon';
import { AppContainer } from 'layouts/AppContainer';
import { FC } from 'react';
import styles from './styles.module.css';
import { IAppModal } from './types';

export const AppModal: FC<IAppModal> = ({
  children,
  open,
  classStyle,
  onClose,
}) => {
  return (
    <Modal className={styles.AppModal} open={open} onClose={onClose}>
      <div className={`${styles.AppModalCard} ${classStyle}`}>
        <AppContainer>
          <div className={styles.header}>
            <Button onClick={onClose}>
              <AppCloseIcon />
            </Button>
          </div>

          {children}
        </AppContainer>
      </div>
    </Modal>
  );
};
