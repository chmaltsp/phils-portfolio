import styled from 'styled-components';
import React, { Component } from 'react';

const Background = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  ${'' /* background-color: hsl(${props => props.colorNumber}, 30%, 50%); */} z-index: -40;
`;

/**
 * StaticBackground
 */
export class StaticBackground extends Component {
  // eslint-disable-line react/prefer-stateless-function
  //
  //
  constructor() {
    super();
    this.state = {
      scrollPercentage: 0
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = event => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    this.setState({
      ...this.state,
      scrollPercentage: top / (doc.offsetHeight - window.innerHeight)
    });
  };
  render() {
    const range = [150, 170]; // HSL Range
    const colorNumber = this.state.scrollPercentage * (range[1] - range[0]) + range[0];
    return (
      <Background
        style={{
          backgroundColor: `hsl(${colorNumber}, 60%, 70%)`
        }}
      />
    );
  }
}

// StaticBackground.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default StaticBackground;
