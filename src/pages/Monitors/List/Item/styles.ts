const styles = {
  root: {
    p: 3,
    backgroundColor: 'white',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mt: 1,
  },

  info: {
    display: 'flex',
    alignItems: 'center',
  },

  status: {
    display: 'block',
    width: 15,
    height: 15,
    borderRadius: '50%',
    mr: 2,
  },

  name: {
    fontWeight: 'fontWeightBold',
    mb: 0.5,
  },

  actions: {
    display: 'flex',
    alignItems: 'center',
  },

  checkTime: {
    display: 'flex',
    alignItems: 'center',

    svg: {
      mr: 0.5,
    },
  },
};

export default styles;
