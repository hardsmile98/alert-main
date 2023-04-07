import React from 'react';
import { Box, Dialog, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const styles = {
  head: {
    position: 'relative',
    pb: 1,
  },

  icon: {
    position: 'absolute',
    top: -10,
    right: 0,
  },

  title: {
    fontWeight: 'fontWeightBold',
    pr: 4,
  },
};

type Props = {
  children: React.ReactNode;
  open: boolean,
  onClose: any,
  title?: string,
};

function Modal({
  children,
  open,
  onClose,
  title,
}:Props) {
  return (
    <Dialog
      onClose={onClose}
      open={open}
    >
      <Box p={[2, 3]}>
        <Box sx={styles.head}>
          {title && (
            <Box sx={styles.title}>
              {title}
            </Box>
          ) }

          <IconButton
            sx={styles.icon}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box>
          {children}
        </Box>
      </Box>
    </Dialog>
  );
}

export default Modal;
