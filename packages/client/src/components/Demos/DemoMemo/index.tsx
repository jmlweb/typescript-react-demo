import React, { FC, useMemo } from 'react';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    published: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

type Props = InferProps<typeof propTypes>;

const DemoMemo: FC<Props> = ({ items }) => {
  const publishedItems = useMemo(() => items.filter((item) => item.published), [items]);
  return <div>{JSON.stringify(publishedItems, null, 2)}</div>;
};

DemoMemo.propTypes = propTypes;

export default DemoMemo;
