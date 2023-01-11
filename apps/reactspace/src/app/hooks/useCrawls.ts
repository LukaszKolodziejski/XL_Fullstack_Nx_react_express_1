import { useQuery } from 'react-query';

import fetchCrawls from '../queries/fetchCrawls';

export const useCrawls = () => {
  const { data, isLoading, isError, isFetching, refetch } = useQuery(
    ['crawls'],
    () => fetchCrawls()
  );

  return { data, isLoading, isError, isFetching, refetch };
};
