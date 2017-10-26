import React from 'react';
import styled from 'styled-components';
import Introduction from '../Introduction';
import Skills from '../Skills';

const Wrapper = styled.div`margin: 90px 70px;`;

function ContentContainer() {
  return (
    <Wrapper>
      <Introduction />
      <Skills />
    </Wrapper>
  );
}
export default ContentContainer;
