import { FC } from 'react';
import { AppContainer } from 'layouts/AppContainer';
import { AppHeadBar } from 'components/AppHeadBar';

export const MainPage: FC = () => {
  return (
    <AppContainer>
      <AppHeadBar title="To Do" />
    </AppContainer>
  );
};
