import { useState } from 'react';
import axios from 'axios';
import { User } from '@re-starter/common';

import { initialState } from './AuthContext';
import { ContextValue } from './types';

type State = Omit<ContextValue, 'login' | 'logout'>;

const useAuthLogic = (): ContextValue => {
  const [authState, setAuthState] = useState<State>(initialState);

  const login: ContextValue['login'] = async (email, password) => {
    setAuthState({
      ...authState,
      isLoading: true,
      error: null,
    });
    try {
      const response = await axios.post<User>(
        '/login',
        {
          email,
          password,
        },
      );
      setAuthState({
        ...authState,
        ...response?.data,
        isLoading: false,
      });
    } catch (e) {
      setAuthState({
        ...authState,
        error: 'Error en el login',
      });
    }
  };

  const logout: ContextValue['logout'] = async () => {
    setAuthState({
      ...authState,
      isLoading: true,
      error: null,
    });
    try {
      await axios.post('/logout');
      setAuthState(initialState);
    } catch (e) {
      setAuthState({
        ...authState,
        error: 'Error en el logout',
      });
    }
  };

  return {
    ...authState,
    login,
    logout,
  };
};

export default useAuthLogic;
