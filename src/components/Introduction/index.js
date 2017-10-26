import React from 'react';
import styled from 'styled-components';
import { modularScale } from 'polished';

const Heading = styled.h1`
  font-size: ${modularScale(6)};
  color: #fff;
`;

const Oneliner = styled.h3`
  font-size: ${modularScale(3)};
  color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function Introduction() {
  return (
    <Wrapper>
      <Heading>Hi, I'm Phil!</Heading>
      <Oneliner>I'm a product guy that specializes in bringing ideas to life and full stack javascript development.</Oneliner>
    </Wrapper>
  );
}
