import * as React from 'react';
import styled from 'styled-components';

import ListItem from '../listItem';
import Title from '../title';

import Note from './note';

const notes = [
  {
    text:
    `layers with a ranking of <b>diamond 2+</b> f
      all under the category of Master tier and should therefore disregard the Diamond tier.`,
    number: 1
  },
  {
    text:
    `Champions marked with a star are mechanically difficult and require you to devote time into learning them,
     in order to play them at the grade that they are ranked at.`,
    number: 2
  }
];

export default () => (
  <ListItem>
    <Title>Final notes</Title>
    {notes.map((n, i) => <Note {...n} key={i} />)}
  </ListItem>
);
