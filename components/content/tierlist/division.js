import React from 'react';
import styled from 'styled-components';

import Tier from './tier';

const Division = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
`;

const source = {
  bronze:
    'https://www.lol-smurfs.com/blog/wp-content/uploads/2017/01/bronzei.png',
  silver: 'https://www.lol-smurfs.com/blog/wp-content/uploads/2017/01/1_3.png',
  gold: 'https://www.lol-smurfs.com/blog/wp-content/uploads/2017/01/goldv.png',
  platinum:
    'https://www.lol-smurfs.com/blog/wp-content/uploads/2017/01/platinumv.png',
  diamond:
    'https://www.lol-smurfs.com/blog/wp-content/uploads/2017/01/diamondi.png',
  master:
    'https://www.lol-smurfs.com/blog/wp-content/uploads/2017/01/master.png'
};

const tierColor = (tier, opacity) => {
  const { r, g, b } = tierColours[tier];

  return { r, g, b, opacity };
};

const tierColours = {
  bronze: { r: 183, g: 122, b: 108 },
  silver: { r: 235, g: 210, b: 200 },
  gold: { r: 255, g: 172, b: 62 },
  platinum: { r: 56, g: 136, b: 59 },
  diamond: { r: 135, g: 22, b: 143 },
  master: { r: 84, g: 64, b: 243 }
};

export default ({ title, opacity }) => (
  <Division>
    <Icon src={source[title]} />
    <Tier bg={tierColor(title, opacity)} />
    <Tier bg={tierColor(title, opacity)} />
    <Tier bg={tierColor(title, opacity)} />
    <Tier bg={tierColor(title, opacity)} />
  </Division>
);
