import * as React from 'react';
import styled from 'styled-components';

import {
  Header as IHeader,
  Division as IDivision,
  Changes as IChanges,
  Highlights as IHighlights
} from '../interfaces';

import Header from './header';
import Tierlist from './tierlist';
import Changes from './changes';
import Highlights from './highlights';
import Footer from './footer';

const Container = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;

  background-image: url('/static/background_bad.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const props = {
  header: {
    patchNumber: '',
    role: ''
  }
};

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
