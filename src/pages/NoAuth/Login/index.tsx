import { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { login as setToken } from 'store/slices/auth';
import { LoadingButton } from '@mui/lab';
import logo from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { isEmail } from 'utils/helpers';
import { useLoginMutation } from 'api/publicApi';
import { ErrorAlert } from 'components';
import styles from './styles';

function Login() {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, {
    isError,
    isLoading,
    isSuccess,
    data,
    error,
  }] = useLoginMutation();

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
            {t('login.title')}
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
              {t('login.password')}
            </Typography>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder={t('login.password')}
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
            {t('login.loginButton')}
          </LoadingButton>

          {isError && (
            <Box mt={1}>
              <ErrorAlert error={error} />
            </Box>
          )}
        </form>

        <Box sx={styles.separator}>
          <span />
          <p>{t('login.or')}</p>
          <span />
        </Box>

        <Box sx={styles.link}>
          {`${t('login.noAccount')} `}
          <Link to="/register">
            {t('login.signUp')}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
