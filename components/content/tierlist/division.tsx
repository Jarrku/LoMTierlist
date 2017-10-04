import * as React from 'react';
import styled from 'styled-components';

import {
  Division as Props,
  ChampionIcon as IChampionIcon
} from '../../interfaces';

import ChampionIcon from './icon';

const Division = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
`;

const Icon = styled.img`
  margin-bottom: 40px;
  width: 100px;
  height: 100px;
`;

interface TierProps {
  division: string;
  className?: string;
}

const BaseTier: React.StatelessComponent<TierProps> = props => (
  <div className={props.className}>{props.children}</div>
);

const Tier = styled(BaseTier)`
  min-height: 224px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;

  flex: 1;

  background-color: ${props =>
    props.theme.content.tierlist.overlays[props.division]};
  box-shadow: ${props => props.theme.content.tierlist.shadow};
`;

const divisionIcons = {
  bronze: '/static/tiers/bronze.png',
  silver: '/static/tiers/silver.png',
  gold: '/static/tiers/gold.png',
  platinum: '/static/tiers/platinum.png',
  diamond: '/static/tiers/diamond.png',
  master: '/static/tiers/master.png'
};

const renderChampions = (c: IChampionIcon, i: number) => (
  <ChampionIcon {...c} key={i} />
);

export default ({ division, tiers: { s, a, b, c } }: Props) => (
  <Division>
    <Icon src={divisionIcons[division]} />
    <Tier division={division}>{s.map(renderChampions)}</Tier>
    <Tier division={division}>{a.map(renderChampions)}</Tier>
    <Tier division={division}>{b.map(renderChampions)}</Tier>
    <Tier division={division}>{c.map(renderChampions)}</Tier>
  </Division>
);
