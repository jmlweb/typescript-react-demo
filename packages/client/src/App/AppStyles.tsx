import React, { FC } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '@re-starter/common';
import PropTypes from 'prop-types';

const AppStyles: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

AppStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppStyles;
