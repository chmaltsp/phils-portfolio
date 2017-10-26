import React from 'react';
import styled from 'styled-components';
import Introduction from '../Introduction';
import Skills from '../Skills';
import Social from '../Social';

const Wrapper = styled.div`margin: 90px 70px;`;

function ContentContainer() {
  return (
    <Wrapper>
      <Introduction />
      <Skills />
      <Social />
    </Wrapper>
  );
}
export default ContentContainer;
