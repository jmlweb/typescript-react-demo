import React, { FC, useReducer } from 'react';

import { ACTION_TYPES } from './actionTypes';
import {
  INITIAL_STATE, State,
} from './state';
import {
  Action, loginAct, logoutAct, updateDataAct,
} from './actions';

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.login:
      return {
        logged: true,
        ...action.payload,
      };
    case ACTION_TYPES.logout:
      return INITIAL_STATE;
    case ACTION_TYPES.updateData:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      throw Error('Action type not found');
  }
};

const DemoReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const login = () => dispatch(
    loginAct({
      name: 'Jose Manuel',
      surname: 'Lucas',
    }),
  );

  const logout = () => dispatch(logoutAct());

  const updateData = () => dispatch(updateDataAct('name', 'JM'));

  return (
    <div>
      <p>
        Current user:
        {' '}
        {JSON.stringify(state, null, 2)}
      </p>
      <button type="button" onClick={login}>
        login
      </button>
      <button type="button" onClick={logout}>
        logout
      </button>
      <button type="button" onClick={updateData}>
        update data
      </button>
    </div>
  );
};

export default DemoReducer;
