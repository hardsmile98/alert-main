const styles = {
  root: {
    p: 1,
  },

  wrapper: {
    my: 10,
    mx: 'auto',
    maxWidth: 500,
    backgroundColor: 'white',
    borderRadius: 2,
    p: [2, 3],
  },

  text: {
    my: 3,
    textAlign: 'center',
  },

  logo: {
    width: 120,
    height: 'auto',
  },

  title: {
    mt: 3,
    fontWeight: 'fontWeightBold',
  },

  field: {
    mb: 1.5,
  },

  separator: {
    mt: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'text.secondary',

    span: {
      width: '42%',
      height: '1px',
      backgroundColor: 'divider',
    },
  },

  link: {
    textAlign: 'center',
    mt: 2,

    a: {
      fontWeight: 'fontWeightMedium',
    },
  },
};

export default styles;
