import { FC, useState } from 'react';
import { AppContainer } from 'layouts/AppContainer';
import { AppHeadBar } from 'components/AppHeadBar';
import { AppCheckbox } from 'UI/AppCheckbox';
import { FormControlLabel } from '@mui/material';
import { AppFixedContainer } from 'layouts/AppFixedContainer';
import { AppCircleButton } from 'UI/AppCircleButton';
import { AppScrollContainer } from 'layouts/AppScrollContainer';
import { PlansList } from './PlansList';
import { CreateModal } from './CreateModal';

export const MainPage: FC = () => {
  const [isTodayTasks, setIsTodayTasks] = useState(false);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [isRefetchPlans, setIsRefetchPlans] = useState(false);

  const onChangeIsTodayTasks = () => {
    setIsTodayTasks((prev) => !prev);
  };

  const onAddTodo = () => {
    setCreateModalIsOpen(true);
  };

  return (
    <>
      <AppScrollContainer>
        <AppContainer>
          <AppHeadBar title="To Do" />
          <FormControlLabel
            control={
              <AppCheckbox
                checked={isTodayTasks}
                onChange={onChangeIsTodayTasks}
              />
            }
            label="Today Tasks:"
          />
          <PlansList
            isTodayTasks={isTodayTasks}
            isRefetchPlans={isRefetchPlans}
            setIsRefetchPlans={setIsRefetchPlans}
          />
        </AppContainer>
      </AppScrollContainer>

      <AppFixedContainer>
        <AppCircleButton onClick={onAddTodo}>+</AppCircleButton>
      </AppFixedContainer>
      {createModalIsOpen && (
        <CreateModal
          open={createModalIsOpen}
          setIsOpen={setCreateModalIsOpen}
          setIsRefetchPlans={setIsRefetchPlans}
        />
      )}
    </>
  );
};
