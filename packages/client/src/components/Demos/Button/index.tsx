import React, { FC, MouseEvent } from 'react';
import PropTypes from 'prop-types';

import { InferPropTypes } from '../../../types';

const propTypes = {
  isSubmit: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  isSubmit: false,
};

type Props = InferPropTypes<typeof propTypes, typeof defaultProps> & {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void,
};

const Button: FC<Props> = ({ isSubmit, onClick, children }) => (
  <button type={isSubmit ? 'submit' : 'button'} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
