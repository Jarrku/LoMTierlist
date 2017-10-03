import React from 'react';
import styled from 'styled-components';

import SocialMedia from './socialMedia';

const tempLinks = [
  {
    icon: '/static/discord.png',
    title: 'Join us',
    link: 'https://discord.gg/CEhbvPV'
  },
  {
    icon: '/static/twitch.png',
    title: 'Tune in',
    link: 'www.twitch.tv/leagueofmentoring'
  },
  {
    icon: '/static/twitter.png',
    title: 'Stay updated',
    link: '@MentoringLeague'
  }
];

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export default ({ links }) => (
  <Container>
    {tempLinks.map((l, i) => <SocialMedia {...l} key={i} />)}
  </Container>
);
