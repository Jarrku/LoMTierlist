import React from 'react';
import styled from 'styled-components';

import Title from './title';
import ListItem from './listItem';

const P = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.theme.sidebar.colour};
  line-height: 1.2;
`;

export default ({ text }) => (
  <ListItem>
    <Title>Impression</Title>
    <P>{text}</P>
  </ListItem>
);
