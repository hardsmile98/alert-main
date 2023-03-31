import { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import logo from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { isEmail } from 'utils/helpers';
import styles from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isDisabled = password.length < 3 || !isEmail(email);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            />
          </Box>

          <LoadingButton
            fullWidth
            type="submit"
            variant="contained"
            disabled={isDisabled}
          >
            Sign in
          </LoadingButton>
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
