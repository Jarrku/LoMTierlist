import * as React from 'react';
import styled from 'styled-components';

const Grade = styled.li`
  height: 224px;

  position: relative;
  padding-left: 20px;

  list-style: none;

  &:after {
    /* bullets */
    content: url('/static/greydot.png');
    position: absolute;
    left: -7px;
    top: 12px;
  }

  &:before {
    /* lines */
    content: '';
    position: absolute;
    left: -1px;
    border-left: 3px solid ${(props) => props.theme.sidebar.lineColour};
    height: 100%;
    width: 1px;
  }

  &:first-child:before {
    /* first li's line */
    height: 300%;
    top: -170px;
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

  color: ${(props) => props.theme.sidebar.colour};
`;
const Info = styled.p`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 300;
  line-height: 1.2;

  color: ${(props) => props.theme.sidebar.gradeInfoColour};
`;

interface Props {
  title: string;
  text: string;
}

export default ({ title, text }: Props) => (
  <Grade>
    <Title>{title}</Title>
    <Info>{text}</Info>
  </Grade>
);
