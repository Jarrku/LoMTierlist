import React from 'react';
import styled from 'styled-components';

const indicators = {
  buff: '/static/changes/down.png',
  nerf: '/static/changes/down.png',
  unchanged: '/static/down.png'
};

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

export default ({ name, iconUrl, type }) => (
  <Container>
    <Icon src={iconUrl} alt={name} />
    <Arrow src={indicators[type]} />
  </Container>
);
