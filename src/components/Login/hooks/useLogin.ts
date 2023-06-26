import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { login } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';

export type LoginInputs = {
  username: string | undefined;
  password: string | undefined;
}

const schema = yup
  .object({
    username: yup
      .string()
      .email('L\'adresse e-mail doit être valide.')
      .required('L\'adresse e-mail est requise pour vous connecter.'),
    password: yup.string().required('Le mot de passe est requis pour vous connecter.')
  })
  .required();

const useLogin = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInputs>({
    resolver: yupResolver(schema)
  });

  const { mutate, isLoading } = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onSuccess: () => {
      enqueueSnackbar("Vous êtes maintenant connecté.", { variant: 'success' })
      router.push('/');
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        enqueueSnackbar(error?.response?.data.message, { variant: 'error'});
      }
    },
  });

  return { register, handleSubmit, mutate, errors, isLoading };
};

export default useLogin;