import React from 'react';
import styled from 'styled-components';

import Title from '../title';

const Highlights = styled.div`
  min-height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  margin: 2px 0 20px;

  border: 5px solid transparent;
  border-right-width: 0px;
  border-left-width: 0px;
  border-image: ${props => props.theme.content.highlight.border};
  border-image-slice: 1;

  background-color: ${props => props.theme.content.highlight.overlay};
  box-shadow: ${props => props.theme.content.highlight.shadow};
`;

const ImgBlock = styled.div`
  min-width: 400px;
  min-height: 280px;
  margin-right: 20px;

  display: block;
  float: left;

  background-image: url(${props => props.splashUrl});
  background-size: cover;
  width: ${props => props.theme.content.highlight.image.size};

  shape-outside: polygon(0 0, 84% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 84% 0, 100% 100%, 0% 100%);
  box-shadow: ${props => props.theme.content.highlight.image.shadow};
`;

const TextBlock = styled.div`
  margin: 10px;
  /* Gradient border bottom, turn off on all other sides */
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 300;
  color: white;

  line-height: 1.6;
`;

export default ({ splashUrl, text }) => (
  <Highlights>
    <Title title="Patch Highlight" />
    <Container>
      <ImgBlock splashUrl={splashUrl} />
      <TextBlock>{text}</TextBlock>
    </Container>
  </Highlights>
);
