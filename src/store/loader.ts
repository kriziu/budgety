import { ActionType } from 'typesafe-actions';
import { action } from 'typesafe-actions';

export enum Constants {
  SET_LOADING = 'SET_LOADING',
  UNSET_LOADING = 'UNSET_LOADING',
}

export const setLoaderAction = () => {
  return action(Constants.SET_LOADING);
};

export const unsetLoaderAction = () => {
  return action(Constants.UNSET_LOADING);
};

const actions = {
  setLoaderAction,
  unsetLoaderAction,
};

export type LoaderActions = ActionType<typeof actions>;

export const loaderReducer = (
  state: boolean = false,
  action: LoaderActions
) => {
  switch (action.type) {
    case Constants.SET_LOADING:
      return true;

    case Constants.UNSET_LOADING:
      return false;

    default:
      return state;
  }
};
