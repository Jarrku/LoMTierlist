import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import getTheme from './themes';
import Sidebar from './sidebar';
import Content from './content';

const Container = styled.div`
  display: flex;

  max-width: 1450px;
  max-height: 2280px;

  /** Background color to fill up when image ends */
  background-color: ${props => props.theme.bg};
`;

const adc = getTheme('adc');

export default () => (
  <ThemeProvider theme={adc}>
    <Container>
      <Sidebar />
      <Content />
    </Container>
  </ThemeProvider>
);
