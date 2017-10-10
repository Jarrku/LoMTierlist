import * as React from 'react';
import styled from 'styled-components';

import { ChampionIcon as Props } from '../../interfaces';

const Icon = styled.img`
  padding: 6px;
  width: 40px;
  height: 40px;
`;

export default ({ iconUrl, name }: Props) => <Icon src={iconUrl} alt={name} />;
