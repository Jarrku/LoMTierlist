import React from 'react';
import styled from 'styled-components';

const arrowDown = '/static/redArrow.png';
const arrowUp =
  'http://www.clker.com/cliparts/e/a/c/a/12065697821256125215pitr_red_arrows_set_5.svg.hi.png';
const flatLine =
  'http://www.clker.com/cliparts/e/a/c/a/12065697821256125215pitr_red_arrows_set_5.svg.hi.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin: 10px;

  border: 2px solid linear-gradient(to bottom, #6d5296, #47315d);
  border-radius: 50%;
`;

const Arrow = styled.img`
  width: 60px;
  height: 70px;
  margin: 20px 0;
`;

export default ({ championIcon }) => (
  <Container>
    <Icon src={championIcon} />
    <Arrow src={arrowDown} />
  </Container>
);
