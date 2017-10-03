import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  border: 5px solid transparent;
  border-image: linear-gradient(
    120deg,
    black 0%,
    black 40%,
    white 50%,
    black 60%,
    black 100%
  );
  border-right-width: 0px;
  border-left-width: 0px;
  border-image-slice: 1;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 50px;
`;

const Arrow = styled.img`
  padding-left: 10px;
  padding-right: 10px;
`;

//const arrowImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/10897-200.png';
const arrowImage = '/static/titleArrow.png';

const Title = styled.div`
  text-transform: uppercase;
  padding: 0 8px 0 8px;

  font-size: 36px;
  font-family: 'Montserrat';
  font-weight: 600;
  color: rgb(255, 255, 255);
  line-height: 1.2;
`;

export default ({ title }) => (
  <TitleContainer>
    <Arrow src={arrowImage} />
    <Title>{title}</Title>
    <Arrow src={arrowImage} />
  </TitleContainer>
);
