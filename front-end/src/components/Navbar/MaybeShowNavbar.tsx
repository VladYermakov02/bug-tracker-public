import { useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

// we pass <HomeNavbar /> so children == <HomeNavbar />
function MaybeShowNavbar({ children }: Props) {
  const location = useLocation();

  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    if (location.pathname === '/login') {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  }, [location]);

  return <div>{showNavBar && children}</div>;
}

export default MaybeShowNavbar;
