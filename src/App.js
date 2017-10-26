import React, { Component } from 'react';
import styled from 'styled-components';

import BallDrag from './components/BallDrag';
import StaticBackground from './components/StaticBackground';
import ContentContainer from './components/ContentContainer';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

class App extends Component {
  //eslint-disable-line
  render() {
    return (
      <Wrapper>
        <ContentContainer />
        <StaticBackground />
        <BallDrag />
      </Wrapper>
    );
  }
}

export default App;
