import { useMediaQuery } from '@mui/material';
import theme from 'theme/theme';

function useIsMobile() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return {
    isMobile,
    isTablet,
  };
}

export default useIsMobile;
