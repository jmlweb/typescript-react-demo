import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import useAuthLogic from './useAuthLogic';
import AuthContext from './AuthContext';

const propTypes = {
  children: PropTypes.node.isRequired,
};

type Props = InferProps<typeof propTypes>;

const AuthProvider: FC<Props> = ({ children }) => {
  const {
    email, login, logout, token, isLoading, error,
  } = useAuthLogic();
  const value = {
    email,
    token,
    login,
    logout,
    isLoading,
    error,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = propTypes;

export default AuthProvider;
