import * as React from 'react';
import styled from 'styled-components';

import SocialMedia, { Props as Link } from './socialMedia';

const links: Link[] = [
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

export default () => (
  <Container>{links.map((l, i) => <SocialMedia {...l} key={i} />)}</Container>
);
