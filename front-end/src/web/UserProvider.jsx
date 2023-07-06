import React, { createContext, useContext } from 'react';
import { useLocalState } from './UseLocalStorage';

const UserContext = createContext();

// eslint-disable-next-line react/prop-types, @typescript-eslint/no-unused-vars
function UserProvider({ children }) {
  const [jwt, setJwt] = useLocalState('', 'jwt');
  // const [state, dispatch] = useReducer(userReducer, jwt);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { jwt, setJwt };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);
  console.log(context);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

// export { UserProvider, useUser,  updateUser};
export { useUser, UserProvider };

// function userReducer(state, action) {
// switch (action.type) {
//   case 'logout': {
//     return null;
//   }
//   case 'login': {
//     return state;
//   }
//   default: {
//     throw new Error(`Unhandled action type: ${action.type}`)
//   }
// }
// return state;
//   }

// function updateUser(dispatch, user, updates) {
//     console.log("user ", user);
//     console.log("updates ", updates);
//     dispatch({type: 'anything', updates});
// }
