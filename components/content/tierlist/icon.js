import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
  padding: 6px;
  width: 40px;
  height: 40px;
`;

export default ({ championIcon }) => (
  <Icon src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Annie.png" />
);
