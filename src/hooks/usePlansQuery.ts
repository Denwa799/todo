import { useQuery } from 'react-query';
import { PlansService } from 'api/services/plans.service';

export const usePlansQuery = () => {
  const {
    isLoading,
    data: plans,
    error,
  } = useQuery('plans', () => PlansService.getAll());
  return { isLoading, plans, error };
};
