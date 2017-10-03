import React from 'react';
import styled from 'styled-components';

import Impression from './impression';
import Grades from './grades';
import Notes from './notes';

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1.2;

  background-color: ${props => props.theme.sidebar.bg};
`;

export default ({ impressionText }) => (
  <Sidebar>
    <Grades />
    <Impression text={impressionText} />
    <Notes />
  </Sidebar>
);
