import { FC, useEffect, useState } from 'react';
import { AppContainer } from 'layouts/AppContainer';
import { AppHeadBar } from 'components/AppHeadBar';
import { AppCheckbox } from 'UI/AppCheckbox';
import { FormControlLabel } from '@mui/material';
import { AppFixedContainer } from 'layouts/AppFixedContainer';
import { AppCircleButton } from 'UI/AppCircleButton';
import { AppScrollContainer } from 'layouts/AppScrollContainer';
import { useNewsQuery } from 'hooks/NewsQuery/query/useNewsQuery';
import { AppRunningLineFixed } from 'components/AppRunningLineFixed';
import { PlansList } from './PlansList';
import { CreateModal } from './CreateModal';
import { Settings } from './Settings';

export const MainPage: FC = () => {
  const [isTodayTasks, setIsTodayTasks] = useState(false);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

  const [newsLineIsActive, setNewsLineIsActive] = useState(true);
  const [newsTitle, setNewsTitle] = useState('');
  const { news } = useNewsQuery();

  useEffect(() => {
    if (news && news.data.results.length > 0) {
      setNewsTitle(news.data.results[0].title);
    }
  }, [news]);

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
          <AppHeadBar title="To Do">
            <Settings
              newsLineIsActive={newsLineIsActive}
              setNewsLineIsActive={setNewsLineIsActive}
            />
          </AppHeadBar>
          <FormControlLabel
            control={
              <AppCheckbox
                checked={isTodayTasks}
                onChange={onChangeIsTodayTasks}
              />
            }
            label="Today Tasks:"
          />
          <PlansList isTodayTasks={isTodayTasks} />
        </AppContainer>
      </AppScrollContainer>
      <AppFixedContainer>
        <AppCircleButton onClick={onAddTodo}>+</AppCircleButton>
      </AppFixedContainer>
      {newsLineIsActive && newsTitle && (
        <AppRunningLineFixed text={newsTitle} />
      )}
      {createModalIsOpen && (
        <CreateModal
          open={createModalIsOpen}
          setIsOpen={setCreateModalIsOpen}
        />
      )}
    </>
  );
};
