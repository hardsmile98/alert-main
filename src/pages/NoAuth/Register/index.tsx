import { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { isEmail } from 'utils/helpers';
import logo from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import styles from './styles';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isDisabled = firstName.length < 3 || lastName.length < 3
    || password.length < 3 || !isEmail(email);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
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
            Sign up
          </LoadingButton>
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
