import { GoogleLoginResponse } from 'react-google-login';
import { action } from 'typesafe-actions';
import { Constants } from './constants';

export const loginAction = (userInfo: GoogleLoginResponse['profileObj']) => {
  return action(Constants.LOGIN, { userInfo });
};

export const logoutAction = () => {
  return action(Constants.LOGOUT);
};
