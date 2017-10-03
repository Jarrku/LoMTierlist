import React from 'react';
import styled from 'styled-components';

import Title from '../title';

const Note = styled.div`
  min-height: 100px;
  padding: 10px;

  font-size: 19.755px;
  font-weight: 300;
  
  line-height: 1.2;

  b {
    text-transform: uppercase;
    color: rgb(181, 179, 179);
    font-weight: 500;
    font-size 17.75
  }
`;

const Container = styled.div`
  display: flex;
  font-family: 'Roboto';
  color: rgb(187, 186, 186);
`;

export default ({ text, number }) => (
  <Container>
    <b>{number}</b>
    <Note
      dangerouslySetInnerHTML={{
        __html: text
      }}
    />
  </Container>
);
