import { FC } from 'react';
import { AppContainer } from 'layouts/AppContainer';
import { AppHeadBar } from 'components/AppHeadBar';
import { AppCheckbox } from 'UI/AppCheckbox';
import { FormControlLabel } from '@mui/material';
import { AppAccordion } from 'UI/AppAccordion';
import { AppVerticalMargins } from 'layouts/AppVerticalMargins';

export const MainPage: FC = () => {
  return (
    <AppContainer>
      <AppHeadBar title="To Do" />
      <FormControlLabel control={<AppCheckbox />} label="Today Tasks:" />
      <AppVerticalMargins margin={32}>
        <AppAccordion title="test">
          <div>
            <div>children</div>
            <div>children</div>
            <div>children</div>
            <div>children</div>
            <div>children</div>
            <div>children</div>
            <div>children</div>
            <div>children</div>
          </div>
        </AppAccordion>
      </AppVerticalMargins>
    </AppContainer>
  );
};
