import * as React from 'react';
import styled from 'styled-components';
import Division from './division';

import { Division as IDivision } from '../../interfaces';

const Tierlist = styled.div`display: flex;`;

interface Props {
  divisions: IDivision[];
}

export default ({ divisions }: Props) => (
  <Tierlist>{divisions.map((d, i) => <Division {...d} key={i} />)}</Tierlist>
);
