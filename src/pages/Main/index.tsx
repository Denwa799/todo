import { FC } from 'react';
import { AppContainer } from 'layouts/AppContainer';
import { AppHeadBar } from 'components/AppHeadBar';
import { AppCheckbox } from 'UI/AppCheckbox';
import { FormControlLabel } from '@mui/material';
import { PlansList } from './PlansList';

export const MainPage: FC = () => {
  return (
    <AppContainer>
      <AppHeadBar title="To Do" />
      <FormControlLabel control={<AppCheckbox />} label="Today Tasks:" />
      <PlansList />
    </AppContainer>
  );
};
