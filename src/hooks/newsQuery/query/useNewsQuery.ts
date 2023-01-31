import { useQuery } from 'react-query';
import { NewsService } from 'api/services/news.service';
import { newsQueryNames } from 'constants/queryNames/newsQuery';

export const useNewsQuery = () => {
  const {
    isLoading,
    data: news,
    error,
    refetch,
  } = useQuery(newsQueryNames.newsQueryName, () => NewsService.getAll());
  return { isLoading, news, error, refetch };
};
