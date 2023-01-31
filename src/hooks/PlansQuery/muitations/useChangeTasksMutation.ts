import { PlansService } from 'api/services/plans.service';
import {
  plansMutationNames,
  plansQueryNames,
} from 'constants/queryNames/plansQuery';
import { ITask } from 'models/ITask';
import { useMutation, useQueryClient } from 'react-query';

const createTask = (data: { id: number; tasks: ITask[] }) => {
  return PlansService.changeTasks(data.id, data.tasks);
};

export const useChangeTasksMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    plansMutationNames.plansChangeTaskMutationName,
    createTask,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(plansQueryNames.plansQueryName);
      },
    }
  );
};
