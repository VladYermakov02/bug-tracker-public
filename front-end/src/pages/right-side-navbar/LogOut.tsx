import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../web/UserProvider';
import PageNaming from '../../utils/PageNaming';

function LogOut() {
  const user = useUser();
  const navigate = useNavigate();
  function logUserOut() {
    // TODO: make for other data
    if (window.localStorage.getItem(PageNaming.Organization) != null) {
      window.localStorage.removeItem(PageNaming.Organization);
    }
    if (window.localStorage.getItem(PageNaming.Project) != null) {
      window.localStorage.removeItem(PageNaming.Project);
    }
    user.setJwt(null);
    navigate('/login');
  }

  return (
    <Button
      className="rounded-pill"
      variant="dark"
      onClick={() => {
        logUserOut();
      }}
    >
      Log Out
    </Button>
  );
}

export default LogOut;
