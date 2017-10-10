import * as React from 'react';
import styled from 'styled-components';

import { ChampionIcon } from '../../interfaces';

const indicators: { [index: string]: string } = {
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

interface Props extends ChampionIcon {
  type: string;
}

export default ({ name, iconUrl, type }: Props) => (
  <Container>
    <Icon src={iconUrl} alt={name} />
    <Arrow src={indicators[type]} />
  </Container>
);
