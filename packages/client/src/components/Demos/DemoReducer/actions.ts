import { ACTION_TYPES, ActionTypes } from './actionTypes';
import { LoggedState } from './state';

type LogoutAct = () => {
  type: ActionTypes['logout'];
};

export const logoutAct: LogoutAct = () => ({
  type: ACTION_TYPES.logout,
});

type UserData = Pick<LoggedState, 'name' | 'surname'>;

type LoginAct = (
  userData: UserData
) => {
  type: ActionTypes['login'];
  payload: UserData;
};

export const loginAct: LoginAct = (userData) => ({
  type: ACTION_TYPES.login,
  payload: userData,
});

type UpdateDataAct = <
  K extends keyof UserData,
  V extends UserData[keyof UserData]
>(
  key: K,
  value: V
) => {
  type: ActionTypes['updateData'];
  payload: {
    key: K;
    value: V;
  };
};

export const updateDataAct: UpdateDataAct = (key, value) => ({
  type: ACTION_TYPES.updateData,
  payload: {
    key,
    value,
  },
});

export type Action = ReturnType<
| LoginAct
| LogoutAct
| UpdateDataAct
>;
