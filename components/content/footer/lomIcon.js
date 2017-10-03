import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  color: white;
  align-items: center;
`;

const Title = styled.div`
  padding-bottom: 10px;
  text-transform: uppercase;

  font-size: 24px;
  font-family: 'Montserrat';
  font-weight: 300;
  color: rgb(255, 255, 255);
  line-height: 1.2;

  b {
    font-weight: 600;
  }
`;

const Text = styled.div`
  font-size: 18px;
  font-family: 'Montserrat';
  font-weight: 200;
  color: rgb(255, 255, 255);
  line-height: 1.2;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;

  margin: 10px;
`;

export default () => (
  <Container>
    <TextContainer>
      <Title>
        <b>League</b> of <b>mentoring</b>
      </Title>
      <Text>Quality Mentoring - Free of charge</Text>
    </TextContainer>
    <Icon src="/static/lomIcon.png" />
  </Container>
);
