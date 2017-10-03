import React from 'react';
import styled from 'styled-components';

import SocialMediaList from './socialMediaList';
import LomIcon from './lomIcon';

const Footer = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: space-between;

  /* Might be: #676799 */
  background-color: #7c5ba9;
`;

export default () => (
  <Footer>
    <SocialMediaList />
    <LomIcon />
  </Footer>
);
