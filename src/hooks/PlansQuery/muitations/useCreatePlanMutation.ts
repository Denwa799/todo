import { PlansService } from 'api/services/plans.service';
import {
  plansMutationNames,
  plansQueryNames,
} from 'constants/queryNames/plansQuery';
import { IPlan } from 'models/IPlan';
import { useMutation, useQueryClient } from 'react-query';

const createPlan = (data: IPlan) => {
  return PlansService.create(data);
};

export const useCreatePlanMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    plansMutationNames.plansCreatePlanMutationName,
    createPlan,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(plansQueryNames.plansQueryName);
      },
    }
  );
};
