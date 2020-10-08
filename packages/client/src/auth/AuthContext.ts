import { createContext } from 'react';

import { ContextValue } from './types';

export const initialState = {
  email: null,
  token: null,
  isLoading: false,
  error: null,
} as ContextValue;

const AuthContext = createContext(initialState);

export default AuthContext;
