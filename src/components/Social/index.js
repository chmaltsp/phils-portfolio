import React from 'react';
import styled from 'styled-components';
import InView from '../../HoC/InView';
import { modularScale, em } from 'polished';

const Label = styled.a.attrs({
  target: '_blank'
})`
  font-size: ${modularScale(2)};
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  z-index: 5;
  transition: color 0.3s linear, transform 0.3s linear;
  &:hover {
    color: #1cc942;
    cursor: none;
    transform: rotateZ(10deg) scale(1.1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const HeadingBase = styled.h3`
  font-size: ${modularScale(3)};
  transition: transform 0.3s linear, opacity 0.3s linear;
  opacity: ${props => (props.inView ? '1' : '0')};
  transform: translate(${props => (props.inView ? '0' : '-200px')}, 0);
`;

const Heading = InView(HeadingBase);
const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: ${em('30px')} 0;
`;

export default function Social() {
  return (
    <Wrapper>
      <Heading>Find me on</Heading>
      <LinkWrapper>
        <Label href="http://github.com/chmaltsp">GITHUB</Label>
        <Label href="http://linkedin.com/philipchmalts">LINKED IN</Label>
      </LinkWrapper>
    </Wrapper>
  );
}
