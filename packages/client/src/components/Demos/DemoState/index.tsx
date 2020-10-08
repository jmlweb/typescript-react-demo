import React, { FC, useState } from 'react';

type UnloggedState = {
  logged: false
};

type LoggedState = {
  logged: true,
  name: string
};

type State = Readonly<UnloggedState | LoggedState>;

const INITIAL_STATE = {
  logged: false,
} as const;

const DemoState: FC = () => {
  const [user, setUser] = useState<State>(INITIAL_STATE);

  const login = () => setUser({
    logged: true,
    name: 'Jose Manuel',
  });

  const logout = () => setUser(INITIAL_STATE);

  return (
    <div>
      <p>
        Current user:
        {' '}
        {JSON.stringify(user, null, 2)}
      </p>
      <button type="button" onClick={login}>login</button>
      <button type="button" onClick={logout}>logout</button>
    </div>
  );
};

export default DemoState;
