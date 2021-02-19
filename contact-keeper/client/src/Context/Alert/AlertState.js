import React from 'react';
import { v4 } from 'uuid';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = ({ children }) => {
  const initialState = [];

  const [state, dispatch] = React.useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = v4();
    dispatch({ type: SET_ALERT, payload: { msg, type, id } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider value={{ alerts: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
