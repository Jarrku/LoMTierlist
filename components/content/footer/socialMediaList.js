import React from 'react';
import styled from 'styled-components';

import SocialMedia from './socialMedia';

const tempLinks = [
  {
    icon: '/static/links/discord.png',
    title: 'Join us',
    link: 'https://discord.gg/CEhbvPV'
  },
  {
    icon: '/static/links/twitch.png',
    title: 'Tune in',
    link: 'www.twitch.tv/leagueofmentoring'
  },
  {
    icon: '/static/links/twitter.png',
    title: 'Stay updated',
    link: '@MentoringLeague'
  }
];

const Container = styled.div`
  padding: 10px;

  display: flex;
  flex-direction: column;

  flex: 1;
`;

export default ({ links }) => (
  <Container>
    {tempLinks.map((l, i) => <SocialMedia {...l} key={i} />)}
  </Container>
);
