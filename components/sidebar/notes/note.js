import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  font-family: 'Roboto';
  color: ${props => props.theme.sidebar.colour};
`;

const Note = styled.div`
  padding: 10px;

  font-size: 19px;
  font-weight: 300;
  line-height: 1.2;

  b {
    font-size: 17px;
    font-weight: 500;
    text-transform: uppercase;
  }
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
