import { useContext } from 'react';

import AuthContext from './AuthContext';
import { ContextValue } from './types';

const useAuth = (): ContextValue => useContext(AuthContext);

export default useAuth;
