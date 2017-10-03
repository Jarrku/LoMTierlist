import React from 'react';
import styled from 'styled-components';
import Division from './division';

const Tierlist = styled.div`display: flex;`;

export default () => (
  <Tierlist>
    <Division title="bronze" opacity={0.4} />
    <Division title="silver" opacity={0.4} />
    <Division title="gold" opacity={0.4} />
    <Division title="platinum" opacity={0.4} />
    <Division title="diamond" opacity={0.25} />
    <Division title="master" opacity={0.4} />
  </Tierlist>
);
