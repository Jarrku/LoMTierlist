import React from 'react';
import styled from 'styled-components';

import Title from '../title';
import Champion from './champion';

const Balance = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  align-items: center;
`;

const BalanceContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export default () => (
  <Balance>
    <Title title="Balance Changes" />
    <BalanceContainer>
      <Champion championIcon="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Annie.png" />
      <Champion championIcon="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Annie.png" />
      <Champion championIcon="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Annie.png" />
      <Champion championIcon="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Annie.png" />
      <Champion championIcon="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Annie.png" />
    </BalanceContainer>
  </Balance>
);
