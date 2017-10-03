import React from 'react';
import styled from 'styled-components';

import Title from './title';

const ListItem = styled.div`
  min-height: 100px;
  padding: 10px;
`;

const P = styled.p`
  font-size: 19px;
  font-family: 'Roboto';
  font-weight: 500;
  color: rgb(187, 186, 186);
  line-height: 1.464;
`;

export default () => (
  <ListItem>
    <Title>Impression</Title>
  </ListItem>
);
