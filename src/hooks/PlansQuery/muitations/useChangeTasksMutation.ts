import { PlansService } from 'api/services/plans.service';
import { ITask } from 'models/ITask';
import { useMutation } from 'react-query';

const createTask = (data: { id: number; tasks: ITask[] }) => {
  return PlansService.changeTasks(data.id, data.tasks);
};

export const useChangeTasksMutation = () => {
  return useMutation('change tasks', createTask);
};
