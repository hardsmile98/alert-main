const styles = {
  root: {},

  link: {
    p: 0,
    borderRadius: 2,
    mb: 1,
    color: 'text.secondary',

    a: {
      width: '100%',
      height: '100%',
      display: 'flex',
      p: 1.5,
      textDecoration: 'none',
      color: 'inherit',

      svg: {
        mr: 1,
      },
    },
  },

  active: {
    color: 'white',
    backgroundColor: 'primary.main',

    ':hover': {
      color: 'white',
      backgroundColor: 'primary.main',
    },
  },
};

export default styles;
