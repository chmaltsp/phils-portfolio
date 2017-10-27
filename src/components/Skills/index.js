import React from 'react';
import styled from 'styled-components';
import { modularScale } from 'polished';
import InView from '../../HoC/InView';
const Heading = styled.h2`font-size: ${modularScale(4)};`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`list-style: inside;`;

const ItemBase = styled.li`
  opacity: ${props => (props.inView ? '1' : '0')};
  transform: translate(0, ${props => (props.inView ? '0' : '-40px')});
  transition: opacity 0.5s linear, transform 0.4s linear;
  font-size: ${modularScale(3)};
`;

const skillList = ['React', 'Node.js', 'Javascript', 'Product Development', 'Continuous Integration', 'Docker', 'Redux', 'AWS', 'Design Systems'];

const Item = InView(ItemBase);
/**
 * Skills
 */
export function Skills() {
  // eslint-disable-line react/prefer-stateless-function

  return (
    <Wrapper>
      <Heading>Here are some of the technologies I like.</Heading>
      <List>
        {skillList.map((skill, index) => {
          return <Item key={skill}>{skill}</Item>;
        })}
      </List>
    </Wrapper>
  );
}

Skills.propTypes = {};

export default Skills;
