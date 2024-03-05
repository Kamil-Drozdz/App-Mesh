import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function fetcher<T>(url: string): Promise<T> {
  const response = await axios.get<T>(url);
  return response.data;
}

function useFetch<T>(fetchKey: string, url: string) {
  const { data, error, isLoading } = useQuery<T, Error>({
    queryKey: [fetchKey, url],
    queryFn: () => fetcher<T>(url),
  });

  return { data, loading: isLoading, error };
}

export default useFetch;
