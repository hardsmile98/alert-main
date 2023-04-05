import { useEffect, useState } from 'react';
import {
  Box,
  Alert,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { isEmail } from 'utils/helpers';
import logo from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from 'api/publicApi';
import { useDispatch } from 'react-redux';
import { login as setToken } from 'store/slices/auth';
import { MyError } from 'models';
import styles from './styles';

function Register() {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register, {
    isError,
    isLoading,
    isSuccess,
    data,
    error,
  }] = useRegisterMutation();

  const { message } = (error as MyError)?.data || {};
  const errorMessage = Array.isArray(message) ? message.join(';') : message;

  const { token } = data || {};

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(token));
    }
  }, [isSuccess]);

  const isDisabled = firstName.length < 3 || lastName.length < 3
    || password.length < 3 || !isEmail(email);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    register({
      firstName,
      lastName,
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
            Sign up for free
          </Typography>
        </Box>

        <form onSubmit={handleRegister}>
          <Box sx={styles.field}>
            <Typography gutterBottom>
              First name
            </Typography>
            <TextField
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              fullWidth
              error={isError}
            />
          </Box>

          <Box sx={styles.field}>
            <Typography gutterBottom>
              Last name
            </Typography>
            <TextField
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              fullWidth
              error={isError}
            />
          </Box>

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
            disabled={isDisabled}
            loading={isLoading}
          >
            Sign up
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
          {'Already have an account? '}
          <Link to="/login">
            Sign in
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
