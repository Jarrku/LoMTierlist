import React from 'react';
import styled from 'styled-components';

const Grade = styled.li`
  height: 224px;
  position: relative; /* so that pseudoelements are positioned relatively to their "li"s*/
  /* use padding-bottom instead of margin-bottom.*/
  margin-bottom: 0; /* This overrides previously specified margin-bottom */
  padding-left: 20px;

  list-style: none;

  &:after {
    /* bullets */
    content: url('/static/grayDot.png');
    position: absolute;
    left: -7px; /*adjust manually*/
    top: 12px;
  }

  &:before {
    /* lines */
    content: '';
    position: absolute;
    left: -1px; /* adjust manually */
    border-left: 3px solid #959595;
    height: 100%;
    width: 1px;
  }

  &:first-child:before {
    /* first li's line */
    height: 300%;
    top: -170px; /* moves the line down so that it disappears under the bullet. Adjust manually */
  }

  &:last-child:before {
    /* last li's line */
    /* height: 6px; /* shorten the line so it goes only up to the bullet. Is equal to first-child:before's top */
  }
`;

const Title = styled.div`
  font-size: 36px;
  font-family: 'Roboto';
  font-weight: 500;
  color: rgb(189, 186, 186);
`;
const Info = styled.p`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 24px;
  line-height: 1.2;

  color: rgb(151, 147, 147);
`;

export default ({ title, text }) => (
  <Grade>
    <Title>{title}</Title>
    <Info>{text}</Info>
  </Grade>
);
