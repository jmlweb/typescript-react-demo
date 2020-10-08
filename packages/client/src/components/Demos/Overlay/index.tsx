import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
};

type Props = InferProps<typeof propTypes>;

const Overlay: FC<Props> = ({
  children,
  visible,
}) => (visible ? <div>{children}</div> : null);

Overlay.defaultProps = {
  visible: false,
};

Overlay.propTypes = propTypes;

export default Overlay;
