import { GoogleLoginResponse } from 'react-google-login';
import { Constants } from './constants';
import { GoogleUserActions } from './types';

export const googleUserReducer = (
  state: GoogleLoginResponse['profileObj'] | null = null,
  action: GoogleUserActions
) => {
  switch (action.type) {
    case Constants.LOGIN:
      return { ...action.payload.userInfo };

    case Constants.LOGOUT:
      return null;

    default:
      return state;
  }
};
