import React from 'react';
import styled from 'styled-components';
import ChampionIcon from './icon';

const Tier = styled.div`
  flex: 1;

  background-color: rgba(
    ${({ bg }) => bg.r},
    ${({ bg }) => bg.g},
    ${({ bg }) => bg.b},
    ${({ bg }) => bg.opacity}
  );

  box-shadow: 0px 0px 20px 1px black;
  /* 
  background: linear-gradient(
    to bottom right,
    rgba(255, 0, 0, 0.3),
    rgba(0, 255, 0, 0.3)
  ); 
  */
  /* Standard syntax */

  /**Box shadow tests */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  min-height: 224px;
`;

export default ({ bg }) => (
  <Tier bg={bg}>
    <ChampionIcon championIcon="Annie" />
    <ChampionIcon championIcon="Annie" />
    <ChampionIcon championIcon="Annie" />
    <ChampionIcon championIcon="Annie" />
    <ChampionIcon championIcon="Annie" />
  </Tier>
);
