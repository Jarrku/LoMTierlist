import * as React from 'react';
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

interface Props {
  impression: string;
}

export default ({ impression }: Props) => (
  <Sidebar>
    <Grades />
    <Impression impression={impression} />
    <Notes />
  </Sidebar>
);
