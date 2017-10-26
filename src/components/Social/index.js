import React from 'react';
import styled from 'styled-components';
import { modularScale } from 'polished';

const Label = styled.a.attrs({
  target: '_blank'
})`
  font-size: ${modularScale(2)};
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  z-index: 5;
  &:hover {
    color: #1cc942;
    transition: color 0.3s linear;
    cursor: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export default function Social() {
  return (
    <Wrapper>
      <Label href="http://github.com/chmaltsp">GITHUB</Label>
      <Label href="http://linkedin.com/philipchmalts">LINKED IN</Label>
    </Wrapper>
  );
}
