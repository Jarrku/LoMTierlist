import * as React from 'react';
import styled from 'styled-components';

import SocialMediaList from './socialMediaList';
import LomIcon from './lomIcon';

const Footer = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: space-between;

  background-color: ${props => props.theme.content.footer.background};
`;

export default () => (
  <Footer>
    <SocialMediaList />
    <LomIcon />
  </Footer>
);
