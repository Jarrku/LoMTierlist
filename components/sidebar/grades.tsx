import * as React from 'react';
import styled from 'styled-components';

import Title from './title';
import ListItem from './listItem';

import GradeItem from './gradeItem';

const Grades = ListItem.extend`margin-top: 130px;`;

const Intro = styled.div`
  padding: 0 0 10px 20px;

  font-size: 16px;
  font-family: 'GlacialIndifferenceRegular';
  color: ${props => props.theme.sidebar.colour};
  text-transform: uppercase;

  b {
    font-family: 'GlacialIndifferenceBold';
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-padding-start: 0;
`;

const gradeInfo = [
  {
    title: 'S',
    text:
      'The strongest champions of the patch. Your typical pick/ban champions'
  },
  {
    title: 'A',
    text:
      'Reliable champions. While strong they are currently outclassed by the top-tier picks'
  },
  {
    title: 'B',
    text:
      'Struggle a lot versus meta champions, but still offer some form of value'
  },
  {
    title: 'C',
    text: 'Viable but bad. They are consistently outclassed by other champions'
  }
];

export default () => (
  <Grades>
    <Title>Grades</Title>
    <Intro>
      <b>Excluded champions</b> are considered <b>D-grade</b>. As a result
      they've been categorized as <b>unviable</b>
    </Intro>
    <Ul>{gradeInfo.map((g, i) => <GradeItem {...g} key={i} />)}</Ul>
  </Grades>
);
