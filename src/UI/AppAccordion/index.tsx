import { FC } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { THEME } from 'constants/theme';
import { AppMoreIcon } from 'assets/icons/AppMoreIcon';
import { AppVerticalLine } from 'UI/AppVerticalLine';
import { IAppAccordion } from './types';
import styles from './styles.module.css';

export const AppAccordion: FC<IAppAccordion> = ({ title, children }) => {
  const accordionStyles = {
    backgroundColor: THEME.backgroundColor1,
    color: THEME.primaryColor1,
    boxShadow: THEME.shadow1,
  };

  const accordionSummaryStyles = {
    minHeight: 79,
    paddingRight: 5,
  };

  return (
    <Accordion className={styles.AppAccordion} sx={accordionStyles} square>
      <AccordionSummary
        expandIcon={<AppMoreIcon color="primary" />}
        sx={accordionSummaryStyles}
      >
        <AppVerticalLine />
        <Typography className={styles.title}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
