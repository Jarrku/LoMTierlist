import * as React from 'react';
import styled from 'styled-components';

import { Changes as Props, ChampionIcon } from '../../interfaces';

import Title from '../title';
import Champion from './champion';

const Balance = styled.div`
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  min-height: 100px;
  align-items: center;

  background-color: ${props => props.theme.content.changes.overlay};
`;

const BalanceContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const renderBuffs = (b: ChampionIcon, i: number) => (
  <Champion {...b} key={i} type="buff" />
);
const renderNerfs = (b: ChampionIcon, i: number) => (
  <Champion {...b} key={i} type="nerf" />
);
const renderUnchanged = (b: ChampionIcon, i: number) => (
  <Champion {...b} key={i} type="unchanged" />
);

export default ({ buffed = [], nerfed = [], unchanged = [] }: Props) => (
  <Balance>
    <Title title="Balance Changes" />
    <BalanceContainer>
      {buffed.map(renderBuffs)}
      {nerfed.map(renderNerfs)}
      {unchanged.map(renderUnchanged)}
    </BalanceContainer>
  </Balance>
);
