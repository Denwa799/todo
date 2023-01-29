import { PlansService } from 'api/services/plans.service';
import { IPlan } from 'models/IPlan';
import { useMutation } from 'react-query';

const createPlan = (data: IPlan) => {
  return PlansService.create(data);
};

export const useCreatePlanMutation = () => {
  return useMutation('create plan', createPlan);
};
