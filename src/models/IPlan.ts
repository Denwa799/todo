import { ITask } from './ITask';

export interface IPlan {
  id: number;
  name: string;
  date: number;
  tasks: ITask[];
}
