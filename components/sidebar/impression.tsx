import * as React from 'react';
import styled from 'styled-components';

import ListItem from './listItem';
import Title from './title';

const P = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${(props) => props.theme.sidebar.colour};
  line-height: 1.2;
`;

interface Props {
  impression: string;
}

export default ({ impression }: Props) => (
  <ListItem>
    <Title>Impression</Title>
    <P>{impression}</P>
  </ListItem>
);
