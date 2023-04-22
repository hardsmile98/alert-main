import Link from 'components/Link';
import { ArrowBackIos as BackIcon } from '@mui/icons-material';

interface IProps {
  buttonText?: string,
  to: string
}

const styles = {
  root: {
    color: 'text.secondary',
    textDecoration: 'none',
    display: 'inline-flex',

    svg: {
      fontSize: 'inherit',
    },

    ':hover': {
      textDecoration: 'none',
      color: 'text.primary',
    },
  },
};

function Back({ buttonText = 'Back', to }: IProps) {
  return (
    <Link
      to={to}
      sx={styles.root}
    >
      <BackIcon />
      {buttonText}
    </Link>
  );
}

export default Back;
