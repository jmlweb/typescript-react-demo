import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import styled from '../../styled';

const SWrapper = styled.section`
  padding: 20px 40px;
  background-color: ${(props) => props.theme.colors.muted};
  max-width: 600px;
  margin: 40px auto;
  box-shadow: 0 5px 12px rgba(0,0,0,0.25);
  border-radius: 6px;
`;

const STitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes[6]}px;
  margin: 0 0 32px;
`;

const SImage = styled.img`
  display: block;
  width: 100%;
`;

const propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

type Props = InferProps<typeof propTypes>;

const Intro: FC<Props> = ({ title, imageSrc }) => (
  <SWrapper>
    <STitle>{title}</STitle>
    <SImage src={imageSrc} alt="" />
  </SWrapper>
);

Intro.propTypes = propTypes;

export default Intro;
