import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/user';

const useUser = () => {
  const { data, isFetching, isError } = useQuery({
    queryKey: ['getUser'],
    queryFn: getUser,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  return { user: data?.data, isFetching, isError };
};

export default useUser;