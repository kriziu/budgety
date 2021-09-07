import { ActionType } from 'typesafe-actions';
import { action } from 'typesafe-actions';

export enum Constants {
  CHANGE_THEME = 'CHANGE_THEME',
}

export const changeThemeAction = (theme: 'light' | 'dark') => {
  return action(Constants.CHANGE_THEME, { theme });
};

export type ThemeActions = ActionType<typeof changeThemeAction>;

export const themeReducer = (
  state: 'light' | 'dark' = 'light',
  action: ThemeActions
) => {
  switch (action.type) {
    case Constants.CHANGE_THEME:
      return action.payload.theme;

    default:
      return state;
  }
};
