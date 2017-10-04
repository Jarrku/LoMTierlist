import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Props } from './interfaces';

import getTheme from './themes';
import Sidebar from './sidebar';
import Content from './content';

const Container = styled.div`
  display: flex;

  max-width: 1500px;
  max-height: 2200px;
  /** Background color to fill up when image ends */
  background-color: ${props => props.theme.bg};
`;

export default ({ theme, impression, ...contentProps }: Props) => (
  <ThemeProvider theme={getTheme(theme)}>
    <Container>
      <Sidebar impression={impression} />
      <Content {...contentProps} />
    </Container>
  </ThemeProvider>
);
