import React, { FC } from 'react';

import styled from '../../styled';

const SWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SInner = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;

const Loading: FC = () => (
  <SWrapper>
    <SInner>Cargando...</SInner>
  </SWrapper>
);

export default Loading;
