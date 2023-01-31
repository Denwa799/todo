import { PlansService } from 'api/services/plans.service';
import {
  plansMutationNames,
  plansQueryNames,
} from 'constants/queryNames/plansQuery';
import { IPlan } from 'models/IPlan';
import { useMutation, useQueryClient } from 'react-query';

const updatePlan = (data: { id: number; plan: IPlan }) => {
  return PlansService.updatePlan(data.id, data.plan);
};

export const useUpdatePlanMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    plansMutationNames.plansUpdatePlanMutationName,
    updatePlan,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(plansQueryNames.plansQueryName);
      },
    }
  );
};
