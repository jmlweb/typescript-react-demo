import React, { FC } from 'react';

type Props = {
  id: string,
  tabIndex: number,
  role?: string,
  hidden?: boolean
};

const MyComp: FC<Props> = ({
  children, id, tabIndex, role, hidden = false,
}) => (
  <div className="my-comp" id={id} tabIndex={tabIndex} hidden={hidden} role={role}>
    {children}
  </div>
);

export default MyComp;
