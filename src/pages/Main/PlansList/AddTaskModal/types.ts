import { ITask } from 'models/ITask';

export interface IAddTaskModal {
  planId: number;
  isOpen: boolean;
  planTasks: ITask[];
  setIsOpen: (value: boolean) => void;
  setIsRefetchPlans: (value: boolean) => void;
}
