import React from 'react';
import styled from 'styled-components';
import Title from '../title';

const Highlights = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  align-items: center;
`;

const Container = styled.div`
  margin-bottom: 20px;
  /* display: flex;*/
`;

const fillerImg =
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg';

const ImgBlock = styled.div`
  display: block;
  float: left;

  background-image: url(${fillerImg});
  background-size: cover;
  width: 50%;

  min-width: 400px;
  min-height: 280px;
  margin-right: 20px;

  shape-outside: polygon(0 0, 84% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 84% 0, 100% 100%, 0% 100%);
  box-shadow: inset 0 0 20px 3px wheat;
`;

const TextBlock = styled.div`
  /*flex: 1;*/
  color: white;
  margin: 10px;
  /* Gradient border bottom, turn off on all other sides */

  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 300;
  color: rgb(255, 255, 255);
  line-height: 1.619;
`;

export default () => (
  <Highlights>
    <Title title="Patch Highlight" />
    <Container>
      <ImgBlock />
      <TextBlock>
        Lorem ipsum dolor sit amet. Vestibulum commodo volutpat a, convallis ac,
        laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis.
        Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada
        fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.
        Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor
        fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa
        ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius
        in, paragraph.
      </TextBlock>
    </Container>
  </Highlights>
);
