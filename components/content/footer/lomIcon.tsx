import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  flex: 1;

  font-family: 'Montserrat';
  color: ${props => props.theme.content.footer.colour};
`;

const TextContainer = styled.div`
  padding-right: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  padding-bottom: 10px;

  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;

  line-height: 1.2;

  b {
    font-weight: 600;
  }
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 200;

  line-height: 1.2;
`;

const Icon = styled.img`
  margin: 10px;

  width: 50px;
  height: 50px;
`;

export default () => (
  <Container>
    <TextContainer>
      <Title>
        <b>League</b> of <b>mentoring</b>
      </Title>
      <Text>Quality Mentoring - Free of charge</Text>
    </TextContainer>
    <Icon src="/static/links/lom.png" />
  </Container>
);
