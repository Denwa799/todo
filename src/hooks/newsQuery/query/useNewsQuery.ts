import { useQuery } from 'react-query';
import { NewsService } from 'api/services/news.service';

export const useNewsQuery = () => {
  const {
    isLoading,
    data: news,
    error,
    refetch,
  } = useQuery('news', () => NewsService.getAll());
  return { isLoading, news, error, refetch };
};
