import React from 'react';
import styled from 'styled-components';

import Tier from './tier';

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

const divisionIcons = {
  bronze: '/static/tiers/bronze.png',
  silver: '/static/tiers/silver.png',
  gold: '/static/tiers/gold.png',
  platinum: '/static/tiers/platinum.png',
  diamond: '/static/tiers/diamond.png',
  master: '/static/tiers/master.png'
};

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

export default ({ division, tiers }) => (
  <Division>
    <Icon src={divisionIcons[division]} />
    {tiers.map((t, i) => <Tier {...t} division={division} key={i} />)}
  </Division>
);
