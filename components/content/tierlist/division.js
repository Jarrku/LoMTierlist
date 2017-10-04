import React from 'react';
import styled from 'styled-components';

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

const Tier = styled.div`
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

const renderChampions = (c, i) => <ChampionIcon {...c} key={i} />;

// sort on S ? -> yes for safety
const props = {
  division: 'bronze',
  tiers: [
    {
      name: 's',
      champions: [{ iconUrl: 'iconUrl', name: 'Name of champion' }]
    }
  ]
};

export default ({ division, tiers: { s, a, b, c } }) => (
  <Division>
    <Icon src={divisionIcons[division]} />
    <Tier division={division}>{s.map(renderChampions)}</Tier>
    <Tier division={division}>{a.map(renderChampions)}</Tier>
    <Tier division={division}>{b.map(renderChampions)}</Tier>
    <Tier division={division}>{c.map(renderChampions)}</Tier>
  </Division>
);
