import * as React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 50px;

  border: 5px solid transparent;
  border-right-width: 0px;
  border-left-width: 0px;
  border-image: ${props => props.theme.content.title.border};
  border-image-slice: 1;

  background-color: ${props => props.theme.content.title.overlay};
  box-shadow: ${props => props.theme.content.title.shadow};
`;

const Arrow = styled.img`padding: 0 10px;`;
const arrowImage = '/static/titleArrow.png';

const Title = styled.div`
  padding: 0 8px;

  font-size: 36px;
  font-family: 'Montserrat';
  font-weight: 600;
  color: rgb(255, 255, 255);
  text-transform: uppercase;

  line-height: 1.2;
`;

interface Props {
  title: string;
}

export default ({ title }: Props) => (
  <TitleContainer>
    <Arrow src={arrowImage} />
    <Title>{title}</Title>
    <Arrow src={arrowImage} />
  </TitleContainer>
);
