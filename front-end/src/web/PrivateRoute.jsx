import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './UserProvider';
import myFetch from '../services/FetchService';

function PrivateRoute(props) {
  // const [jwt, setJwt] = useLocalState("", "jwt");
  const user = useUser();
  const [isLoading, setIsLoading] = useState(true); // true because when we get here the page is loading and awaits the answer
  const [isValid, setIsValid] = useState(null); // null because we're not sure about the data by this point
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  if (user) {
    // isValid is send from back-end
    myFetch(
      `http://localhost:8081/api/auth/validate?token=${user.jwt}`,
      'GET',
      user.jwt
    ).then(
      // eslint-disable-next-line @typescript-eslint/no-shadow
      (isValid) => {
        setIsValid(isValid);
        setIsLoading(false);
      }
    );
  } else {
    return <Navigate to="/login" />;
  }

  // eslint-disable-next-line no-nested-ternary
  return isLoading ? (
    <div>Loading...</div>
  ) : isValid === true ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
