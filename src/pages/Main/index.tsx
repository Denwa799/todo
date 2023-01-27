import { FC, useState } from 'react';
import { AppContainer } from 'layouts/AppContainer';
import { AppHeadBar } from 'components/AppHeadBar';
import { AppCheckbox } from 'UI/AppCheckbox';
import { FormControlLabel } from '@mui/material';
import { AppAccordion } from 'UI/AppAccordion';
import { AppVerticalMargins } from 'layouts/AppVerticalMargins';
import { AppTaskCard } from 'components/AppTaskCard';

export const MainPage: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onChangeSwitch = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <AppContainer>
      <AppHeadBar title="To Do" />
      <FormControlLabel control={<AppCheckbox />} label="Today Tasks:" />
      <AppVerticalMargins margin={32}>
        <AppAccordion title="test">
          <div>
            <AppTaskCard
              title="day 1"
              subtitle="lorem ipsume"
              checked={isChecked}
              onChange={onChangeSwitch}
            />
          </div>
        </AppAccordion>
      </AppVerticalMargins>
    </AppContainer>
  );
};
