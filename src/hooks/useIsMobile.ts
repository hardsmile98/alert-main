import { useEffect, useState } from 'react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const hasWindow = typeof window !== 'undefined';

  const handleResize = () => {
    const isMobileWidth = window.innerWidth < 900;

    setIsMobile(isMobileWidth);
  };

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (hasWindow) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [hasWindow]);

  return isMobile;
}

export default useIsMobile;
