import { ITask } from './ITask';

export interface IPlan {
  id: number;
  name: string;
  date: Date;
  tasks: ITask[];
}
