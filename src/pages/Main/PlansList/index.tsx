import { FC, useEffect, useState } from 'react';
import { Alert, Snackbar, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import { AppTaskCard } from 'components/AppTaskCard';
import { usePlansQuery } from 'hooks/query/usePlansQuery';
import { AppVerticalMargins } from 'layouts/AppVerticalMargins';
import { IPlan } from 'models/IPlan';
import { ITask } from 'models/ITask';
import { AppAccordion } from 'UI/AppAccordion';
import { AppSkeleton } from 'UI/AppSkeleton';
import { dateClearTime } from 'utils/date/dateClear';
import { useUpdatePlanMutation } from 'hooks/muitations/useUpdatePlanMutation';
import styles from './styles.module.css';
import { IPlansList } from './types';

export const PlansList: FC<IPlansList> = ({ isTodayTasks }) => {
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const currentDate = new Date();
  const currentTime = dateClearTime(currentDate.getTime());

  const { plans, isLoading, error, refetch } = usePlansQuery(
    isTodayTasks && { date: currentTime }
  );

  const { mutate } = useUpdatePlanMutation();

  useEffect(() => {
    refetch();
  }, [isTodayTasks]);

  useEffect(() => {
    if (error && isAxiosError(error)) setAlertIsOpen(true);
  }, [error]);

  const onClose = () => {
    setAlertIsOpen(false);
  };

  const onChangeSwitch = (taskId: number, plan: IPlan) => {
    const planIndex = plan.tasks.findIndex((task) => task.id === taskId);
    const task = plan.tasks[planIndex];

    task.isDone = !task.isDone;
    plan.tasks[planIndex] = task;

    const result = {
      id: plan.id,
      plan,
    };
    mutate(result);
  };

  if (isLoading) {
    return (
      <>
        <AppVerticalMargins margin={32}>
          <AppSkeleton />
        </AppVerticalMargins>
        <AppVerticalMargins margin={32}>
          <AppSkeleton />
        </AppVerticalMargins>
        <AppVerticalMargins margin={32}>
          <AppSkeleton />
        </AppVerticalMargins>
      </>
    );
  }

  return (
    <>
      {error && isAxiosError(error) && (
        <Snackbar open={alertIsOpen} autoHideDuration={6000} onClick={onClose}>
          <Alert severity="error" onClick={onClose}>
            {error.message}
          </Alert>
        </Snackbar>
      )}
      {plans ? (
        plans.data.map((plan: IPlan) => {
          const date = new Date(plan.date);
          const isTomorrow = date.toDateString() === currentDate.toDateString();
          const dateString = isTomorrow
            ? `Tomorrow`
            : `${date.getDate()}/0${date.getMonth() + 1}`;

          return (
            <AppVerticalMargins key={`${plan.id} ${plan.name}`} margin={32}>
              <AppAccordion title={`${dateString} ${plan.name}`}>
                <div>
                  {plan.tasks.length > 0 &&
                    plan.tasks.map((task: ITask) => {
                      return (
                        <AppTaskCard
                          key={`${task.id} ${task.name}`}
                          id={task.id}
                          title={task.name}
                          subtitle={task.text}
                          color={task.color}
                          checked={task.isDone}
                          plan={plan}
                          onChange={onChangeSwitch}
                        />
                      );
                    })}
                </div>
              </AppAccordion>
            </AppVerticalMargins>
          );
        })
      ) : (
        <Typography className={styles.emptyListMessage} variant="h3">
          Список пуст
        </Typography>
      )}
    </>
  );
};
