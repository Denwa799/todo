import { useQuery } from 'react-query';
import { PlansService } from 'api/services/plans.service';

export const usePlansQuery = (
  filter = {},
  sort = 'date',
  order: 'asc' | 'desc' = 'desc'
) => {
  const {
    isLoading,
    data: plans,
    error,
    refetch,
  } = useQuery('plans', () => PlansService.getAll(sort, order, filter));
  return { isLoading, plans, error, refetch };
};
