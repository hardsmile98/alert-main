/* eslint-disable react/jsx-props-no-spreading */
import { Link as MuiLink, SxProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode
  to: string
  sx?: SxProps
}

function Link({
  children, to, sx, ...props
}: Props) {
  return (
    <MuiLink
      component={RouterLink}
      to={to}
      sx={sx}
      {...props}
    >
      {children}
    </MuiLink>
  );
}

export default Link;
