import { Alert, Snackbar, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import { AppTaskCard } from 'components/AppTaskCard';
import { usePlansQuery } from 'hooks/usePlansQuery';
import { AppVerticalMargins } from 'layouts/AppVerticalMargins';
import { IPlan } from 'models/IPlan';
import { ITask } from 'models/ITask';
import { useEffect, useState } from 'react';
import { AppAccordion } from 'UI/AppAccordion';
import { AppSkeleton } from 'UI/AppSkeleton';
import styles from './styles.module.css';

export const PlansList = () => {
  const { plans, isLoading, error } = usePlansQuery();

  const [alertIsOpen, setAlertIsOpen] = useState(false);

  useEffect(() => {
    if (error && isAxiosError(error)) setAlertIsOpen(true);
  }, [error]);

  const onClose = () => {
    setAlertIsOpen(false);
  };

  const onChangeSwitch = () => {
    console.log('onChangeSwitch');
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
          return (
            <AppVerticalMargins key={`${plan.id} ${plan.name}`} margin={32}>
              <AppAccordion title={plan.name}>
                <div>
                  {plan.tasks.length > 0 &&
                    plan.tasks.map((task: ITask) => {
                      return (
                        <AppTaskCard
                          key={`${task.id} ${task.name}`}
                          title={task.name}
                          subtitle={task.text}
                          checked={task.isDone}
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
