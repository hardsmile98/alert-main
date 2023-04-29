import { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import { isEmail } from 'utils/helpers';
import logo from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from 'api/publicApi';
import { useDispatch } from 'react-redux';
import { login as setToken } from 'store/slices/auth';
import { ErrorAlert } from 'components';
import styles from './styles';

function Register() {
  const dispatch = useDispatch();

  const { t } = useTranslation();

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
            {t('register.title')}
          </Typography>
        </Box>

        <form onSubmit={handleRegister}>
          <Box sx={styles.field}>
            <Typography gutterBottom>
              {t('register.firstName')}
            </Typography>
            <TextField
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={t('register.firstName')}
              fullWidth
              error={isError}
            />
          </Box>

          <Box sx={styles.field}>
            <Typography gutterBottom>
              {t('register.lastName')}
            </Typography>
            <TextField
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder={t('register.lastName')}
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
              {t('register.password')}
            </Typography>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder={t('register.password')}
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
            {t('register.registerButton')}
          </LoadingButton>

          {isError && (
          <Box mt={1}>
            <ErrorAlert error={error} />
          </Box>
          )}
        </form>

        <Box sx={styles.separator}>
          <span />
          <p>{t('register.or')}</p>
          <span />
        </Box>

        <Box sx={styles.link}>
          {`${t('register.haveAccount')} `}
          <Link to="/login">
            {t('register.signIn')}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
