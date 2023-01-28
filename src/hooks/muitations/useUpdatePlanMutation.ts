import { PlansService } from 'api/services/plans.service';
import { IPlan } from 'models/IPlan';
import { useMutation } from 'react-query';

const updatePlan = (data: { id: number; plan: IPlan }) => {
  return PlansService.updatePlan(data.id, data.plan);
};

export const useUpdatePlanMutation = () => {
  return useMutation('update plan', updatePlan);
};
