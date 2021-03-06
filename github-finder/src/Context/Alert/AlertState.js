import React from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = ({ children }) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = React.useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider value={{ alert: state.alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
