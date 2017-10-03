import React from 'react';
import styled from 'styled-components';

import ChampionIcon from './icon';

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

export default ({ division, champions }) => (
  <Tier division={division}>
    {champions.map((c, i) => <ChampionIcon {...c} key={i} />)}
  </Tier>
);
