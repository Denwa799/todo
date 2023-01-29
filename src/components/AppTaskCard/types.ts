import { IPlan } from 'models/IPlan';
import { ITask } from 'models/ITask';

export interface IAppTaskCard {
  task: ITask;
  plan: IPlan;
  onChange: (taskId: number, plan: IPlan) => void;
  onClick: (planId: number, planTasks: ITask[], task: ITask) => void;
}
