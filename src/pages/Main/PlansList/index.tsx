import { FC, useEffect, useState } from 'react';
import { Alert, Button, Snackbar, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import { AppTaskCard } from 'components/AppTaskCard';
import { usePlansQuery } from 'hooks/PlansQuery/query/usePlansQuery';
import { AppVerticalMargins } from 'layouts/AppVerticalMargins';
import { IPlan } from 'models/IPlan';
import { ITask } from 'models/ITask';
import { AppAccordion } from 'UI/AppAccordion';
import { AppSkeleton } from 'UI/AppSkeleton';
import { dateClearTime } from 'utils/date/dateClear';
import { useUpdatePlanMutation } from 'hooks/PlansQuery/muitations/useUpdatePlanMutation';
import styles from './styles.module.css';
import { IPlansList } from './types';
import { AddTaskModal } from './AddTaskModal';

export const PlansList: FC<IPlansList> = ({
  isTodayTasks,
  isRefetchPlans,
  setIsRefetchPlans,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState(0);
  const [selectedPlanTasks, setSelectedPlanTasks] = useState<ITask[]>([]);
  const [addTaskModalIsOpen, setAddTaskModalIsOpen] = useState(false);
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const currentDate = new Date();
  const currentTime = dateClearTime(currentDate.getTime());

  const { plans, isLoading, error, refetch } = usePlansQuery(
    isTodayTasks && { date: currentTime }
  );

  const { mutateAsync } = useUpdatePlanMutation();

  useEffect(() => {
    refetch();
  }, [isTodayTasks]);

  useEffect(() => {
    if (isRefetchPlans) {
      refetch();
      setIsRefetchPlans(false);
    }
  }, [isRefetchPlans]);

  useEffect(() => {
    if (error && isAxiosError(error)) setAlertIsOpen(true);
  }, [error]);

  const onClose = () => {
    setAlertIsOpen(false);
  };

  const onChangeSwitch = async (taskId: number, plan: IPlan) => {
    const planIndex = plan.tasks.findIndex((task) => task.id === taskId);
    const task = plan.tasks[planIndex];

    task.isDone = !task.isDone;
    plan.tasks[planIndex] = task;

    const result = {
      id: plan.id,
      plan,
    };
    await mutateAsync(result);
  };

  const onAddTask = (planId: number, planTasks: ITask[]) => {
    setSelectedPlanId(planId);
    setSelectedPlanTasks(planTasks);
    setAddTaskModalIsOpen(true);
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
        <Snackbar open={alertIsOpen} autoHideDuration={6000} onClose={onClose}>
          <Alert severity="error" onClick={onClose}>
            {error.message}
          </Alert>
        </Snackbar>
      )}
      {addTaskModalIsOpen && (
        <AddTaskModal
          planId={selectedPlanId}
          isOpen={addTaskModalIsOpen}
          planTasks={selectedPlanTasks}
          setIsOpen={setAddTaskModalIsOpen}
          setIsRefetchPlans={setIsRefetchPlans}
        />
      )}
      {plans ? (
        plans.data.map((plan: IPlan) => {
          const date = new Date(plan.date);
          const isTomorrow = date.toDateString() === currentDate.toDateString();
          const monthString = `0${date.getMonth() + 1}`.slice(-2);
          const dateString = isTomorrow
            ? `Tomorrow`
            : `${date.getDate()}/${monthString}`;

          return (
            <AppVerticalMargins key={`${plan.id} ${plan.name}`} margin={32}>
              <AppAccordion title={`${dateString} ${plan.name}`}>
                <div>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    onClick={() => onAddTask(plan.id, plan.tasks)}
                  >
                    Add task
                  </Button>
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
