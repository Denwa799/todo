import { ITask } from 'models/ITask';

export interface ITaskModal {
  planId: number;
  isOpen: boolean;
  task: ITask | null;
  planTasks: ITask[];
  setIsOpen: (value: boolean) => void;
  setIsRefetchPlans: (value: boolean) => void;
}
