import React from 'react';
import styled from 'styled-components';

import GradeItem from './gradeItem';
import Title from './title';

const ListItem = styled.div`
  padding: 10px;
  margin-top: 140px;
`;

const Intro = styled.div`
  font-size: 16px;
  font-family: 'GlacialIndifferenceRegular';
  font-weight: normal;
  font-style: normal;

  color: rgb(187, 186, 186);
  text-transform: uppercase;
  padding-left: 20px;
  padding-bottom: 10px;

  b {
    font-family: 'GlacialIndifferenceBold';
  }
`;

const NoStyleUl = styled.ul`
  display: block;
  list-style-type: none;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0px;
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
  <ListItem>
    <Title>Grades</Title>
    <Intro>
      <b>Excluded champions</b> are considered <b>D-grade</b>. As a result
      they've been categorized as <b>unviable</b>
    </Intro>
    <NoStyleUl>
      {gradeInfo.map((g, i) => <GradeItem {...g} key={i} />)}
    </NoStyleUl>
  </ListItem>
);
