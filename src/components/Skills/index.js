import React, { Component } from 'react';
import styled from 'styled-components';
import { modularScale } from 'polished';

const Heading = styled.h2`font-size: ${modularScale(4)};`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`list-style: inside;`;

const Item = styled.li`
  opacity: ${props => (props.inView ? '1' : '0')};
  transform: translate(0, ${props => (props.inView ? '0' : '-40px')});
  transition: opacity 0.5s linear, transform 0.4s linear;
  font-size: ${modularScale(3)};
`;

const skillList = ['React', 'Node.js', 'Javascript', 'Product Development', 'Continuous Integration', 'Docker', 'Redux', 'AWS', 'Design Systems'];

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;

  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || html.clientHeight) && rect.right <= (window.innerWidth || html.clientWidth);
}

/**
 * Skills
 */
export class Skills extends Component {
  // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();

    this.skillRefs = {};
    this.state = {};
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  }

  onScroll(event) {
    Object.keys(this.skillRefs).forEach(skill => {
      const element = this.skillRefs[skill];

      this.setState({
        ...this.state,
        [skill]: isInViewport(element)
      });
    });
  }
  render() {
    return (
      <Wrapper>
        <Heading>Here are some of the technologies I like.</Heading>
        <List>
          {skillList.map((skill, index) => {
            return (
              <Item key={skill} innerRef={comp => (this.skillRefs[skill] = comp)} inView={this.state[skill] && this.state[skill]}>
                {skill}
              </Item>
            );
          })}
        </List>
        <List>
          <Item>Docker</Item>
          <Item>Redux</Item>
          <Item>React Native</Item>
          <Item>GraphQL</Item>
          <Item>AWS</Item>
        </List>
      </Wrapper>
    );
  }
}

Skills.propTypes = {};

export default Skills;
