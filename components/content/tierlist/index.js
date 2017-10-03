import React from 'react';
import styled from 'styled-components';
import Division from './division';

const Tierlist = styled.div`display: flex;`;

export default ({ divisions }) => (
  <Tierlist>{divisions.map((d, i) => <Division {...d} key={i} />)}</Tierlist>
);
