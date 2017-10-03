import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderImage = styled.img`height: 150px;`;

const Intro = styled.h3`
  margin-bottom: 0;

  font-size: 18px;
  font-family: 'Montserrat';
  font-weight: 400;
  color: black;
  text-transform: uppercase;

  line-height: 1.2;
`;

const Title = styled.h1`
  margin-top: 0;

  font-size: 46px;
  font-family: 'Montserrat';
  font-weight: 600;
  color: black;
  text-transform: uppercase;

  line-height: 1.2;
`;

const roleImages = {
  top: '/static/roles/top.png',
  jungle: '/static/roles/jungle.png',
  mid: '/static/roles/mid.png',
  adc: '/static/roles/adc.png',
  support: '/static/roles/support.png'
};

export default ({ patchNumber, role }) => (
  <Header>
    <HeaderImage src={roleImages[role]} />
    <Intro>League of mentoring presents</Intro>
    <Title>Patch {patchNumber} Tierlist!</Title>
  </Header>
);
