import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { TransitionMotion, spring, presets } from 'react-motion';

const Ball = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  position: absolute;
  transform: translate3d(0, 0, 0);
`;

const BallsContainer = styled.div`
  width: 100%;
  ${'' /* height: 100%; */} position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
`;
/**
 * BallDrag
 */
class BallDrag extends PureComponent {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      balls: [
        {
          key: '0',
          style: {
            translateX: 0,
            translateY: 25
          }
        }
      ]
    };
  }
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = ({ clientX: x, clientY: y }) => {
    this.setState({ ...this.state, x, y });
  };

  getStyles = prevStyles => {
    const endValue = this.state.balls.map((_, index) => {
      return index === 0
        ? {
            key: `${index}`,
            style: {
              translateX: spring(this.state.x, presets.noWobble),
              translateY: spring(this.state.y, presets.noWobble)
            }
          }
        : {
            key: `${index}`,
            style: {
              translateX: spring(prevStyles[index - 1].style.translateX, presets.noWobble),
              translateY: spring(prevStyles[index - 1].style.translateY + 20, presets.noWobble)
            }
          };
    });
    return endValue;
  };

  handleAddBalls = () => {
    const currentBalls = this.state.balls;
    currentBalls.push({
      key: `${this.state.balls.length}`,
      style: {
        translateX: 0,
        translateY: 0
        // backgroundColor: `hsl(${this.state.balls.length * 3}, 100%, 60%)`
      }
    });
    this.setState({
      ...this.state,
      balls: currentBalls
    });
  };

  render() {
    return (
      <TransitionMotion defaultStyles={this.state.balls} styles={this.getStyles}>
        {interpolatedStyles => (
          <BallsContainer onClick={this.handleAddBalls} style={{ height: window.innerHeight }}>
            {interpolatedStyles.map((config, index) => {
              return (
                <Ball
                  key={config.key}
                  style={{
                    backgroundColor: `hsl(${(index + 1) * 10}, 100%, 60%)`,
                    transform: `translateX(${config.style.translateX}px) translateY(${config.style.translateY}px)`
                  }}
                />
              );
            })}
          </BallsContainer>
        )}
      </TransitionMotion>
    );
  }
}

export default BallDrag;
