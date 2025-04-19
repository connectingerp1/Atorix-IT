import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop component that scrolls the window to the top whenever
// the pathname changes using react-router's useLocation hook
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
