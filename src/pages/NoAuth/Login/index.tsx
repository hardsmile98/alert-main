import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import logo from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import styles from './styles';

function Login() {
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
            Sign up for free
          </Typography>
        </Box>

        <form onSubmit={handleLogin}>
          <Box sx={styles.field}>
            <Typography gutterBottom>
              First name
            </Typography>
            <TextField
              placeholder="First name"
              fullWidth
            />
          </Box>

          <Box sx={styles.field}>
            <Typography gutterBottom>
              Last name
            </Typography>
            <TextField
              placeholder="Last name"
              fullWidth
            />
          </Box>

          <Box sx={styles.field}>
            <Typography gutterBottom>
              E-mail
            </Typography>
            <TextField
              placeholder="E-mail"
              fullWidth
            />
          </Box>

          <Box sx={styles.field}>
            <Typography gutterBottom>
              Password
            </Typography>
            <TextField
              placeholder="Password"
              fullWidth
            />
          </Box>

          <Button
            fullWidth
            type="submit"
          >
            Sign up
          </Button>
        </form>

        <Box sx={styles.separator}>
          <span />
          <p>OR</p>
          <span />
        </Box>

        <Box sx={styles.link}>
          {'Already have an account? '}
          <Link to="/register">
            Sign in
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
