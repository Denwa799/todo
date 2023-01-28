import { IPlan } from 'models/IPlan';

export interface IAppTaskCard {
  id: number;
  title: string;
  subtitle: string;
  color?: string;
  checked?: boolean;
  plan: IPlan;
  onChange: (taskId: number, plan: IPlan) => void;
}
