import { FC, useState } from 'react';
import { AppContainer } from 'layouts/AppContainer';
import { AppHeadBar } from 'components/AppHeadBar';
import { AppCheckbox } from 'UI/AppCheckbox';
import { FormControlLabel } from '@mui/material';
import { PlansList } from './PlansList';

export const MainPage: FC = () => {
  const [isTodayTasks, setIsTodayTasks] = useState(false);

  const onChangeIsTodayTasks = () => {
    setIsTodayTasks((prev) => !prev);
  };

  return (
    <AppContainer>
      <AppHeadBar title="To Do" />
      <FormControlLabel
        control={
          <AppCheckbox checked={isTodayTasks} onChange={onChangeIsTodayTasks} />
        }
        label="Today Tasks:"
      />
      <PlansList isTodayTasks={isTodayTasks} />
    </AppContainer>
  );
};
