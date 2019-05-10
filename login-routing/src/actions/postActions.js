import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types';

export const checkUser = () => dispatch => {
  console.log('fetching');
  dispatch({
    type: LOGIN_REQUEST,
    payload: ''
  });
};

export const loginSuccess = () => dispatch => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: ''
  });
};

export const loginFailure = () => dispatch => {
  dispatch({
    type: LOGIN_FAILURE,
    payload: ''
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
    payload: ''
  });
};
