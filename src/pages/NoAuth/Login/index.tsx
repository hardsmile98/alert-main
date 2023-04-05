import { useEffect, useState } from 'react';
import {
  Box,
  Alert,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { login as setToken } from 'store/slices/auth';
import { LoadingButton } from '@mui/lab';
import logo from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { isEmail } from 'utils/helpers';
import { useLoginMutation } from 'api/publicApi';
import { MyError } from 'models';
import styles from './styles';

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, {
    isError,
    isLoading,
    isSuccess,
    data,
    error,
  }] = useLoginMutation();

  const { message } = (error as MyError)?.data || {};
  const errorMessage = Array.isArray(message) ? message.join(';') : message;

  const { token } = data || {};

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(token));
    }
  }, [isSuccess]);

  const isDisabled = password.length < 3 || !isEmail(email);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login({
      email,
      password,
    });
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.text}>
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={styles.logo}
          />

          <Typography
            sx={styles.title}
            variant="h4"
          >
            Welcome Back
          </Typography>
        </Box>

        <form onSubmit={handleLogin}>
          <Box sx={styles.field}>
            <Typography gutterBottom>
              E-mail
            </Typography>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              type="email"
              fullWidth
              error={isError}
            />
          </Box>

          <Box sx={styles.field}>
            <Typography gutterBottom>
              Password
            </Typography>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              fullWidth
              error={isError}
            />
          </Box>

          <LoadingButton
            fullWidth
            type="submit"
            variant="contained"
            loading={isLoading}
            disabled={isDisabled}
          >
            Sign in
          </LoadingButton>

          {isError && (
            <Alert
              severity="error"
              sx={{ mt: 1 }}
            >
              {errorMessage}
            </Alert>
          )}
        </form>

        <Box sx={styles.separator}>
          <span />
          <p>OR</p>
          <span />
        </Box>

        <Box sx={styles.link}>
          {'Do not have an account? '}
          <Link to="/register">
            Sign up
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
