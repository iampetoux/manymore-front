import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useLogin from '@/components/Login/hooks/useLogin';
import { Alert } from '@mui/material';

const Login = () => {
  const { register, handleSubmit, mutate, errors } = useLogin();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component='h1' variant='h5'>
          Connexion
        </Typography>
        <Box component='form' onSubmit={handleSubmit(mutate)} sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            fullWidth
            id='email'
            label='Adresse email'
            name='email'
            autoComplete='email'
            autoFocus
            {...register('username')}
          />
          {errors.username && <Alert variant='outlined' severity='error'>
            {errors.username?.message}
          </Alert>}
          <TextField
            margin='normal'
            fullWidth
            name='password'
            label='Mot de passe'
            type='password'
            id='password'
            autoComplete='current-password'
            {...register('password', { required: true })}
          />
          {errors.password && <Alert variant='outlined' severity='error'>
            {errors.password?.message}
          </Alert>}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Connexion
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;