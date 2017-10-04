import * as React from 'react';
import styled from 'styled-components';

import {
  Changes as IChanges,
  Division as IDivision,
  Header as IHeader,
  Highlights as IHighlights
} from '../interfaces';

import Changes from './changes';
import Footer from './footer';
import Header from './header';
import Highlights from './highlights';
import Tierlist from './tierlist';

const Container = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;

  background-image: url('/static/background.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  header: IHeader;
  tierlist: IDivision[];
  changes: IChanges;
  highlights: IHighlights;
}

export default ({ header, tierlist, changes, highlights }: Props) => (
  <Container>
    <Content>
      <Header {...header} />
      <Tierlist divisions={tierlist} />
      <Changes {...changes} />
      <Highlights {...highlights} />
    </Content>
    <Footer />
  </Container>
);
