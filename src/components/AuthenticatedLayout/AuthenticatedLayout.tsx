import useUser from '@/components/AuthenticatedLayout/hooks/useUser';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LoadingContainer, LoadingWrapper } from '@/components/AuthenticatedLayout/AuthenticatedLayout.styled';
import { CircularProgress } from '@mui/material';

const AuthenticatedLayout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const { user, isFetching, isError } = useUser();

  if (isError) {
    router.push('/login');
  }

  if (isFetching && !user) {
    return (
      <LoadingContainer>
        <LoadingWrapper>
          <CircularProgress />
        </LoadingWrapper>
      </LoadingContainer>
    );
  } else if (user) {
    return children;
  }
};

export default AuthenticatedLayout;