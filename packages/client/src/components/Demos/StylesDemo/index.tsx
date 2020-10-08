import React, { FC, CSSProperties } from 'react';
import PropTypes, { InferProps } from 'prop-types';

const style: CSSProperties = {
  backgroundColor: 'red',
  padding: '20px 30px',
};

const propTypes = {
  children: PropTypes.node.isRequired,
};

type Props = InferProps<typeof propTypes>;

const StylesDemo: FC<Props> = ({ children }) => (
  <div style={style}>
    {children}
  </div>
);

StylesDemo.propTypes = propTypes;

export default StylesDemo;
