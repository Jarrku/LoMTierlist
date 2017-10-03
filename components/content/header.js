import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderImage = styled.img`
  width: 70px;
  height: 70px;
`;
const Intro = styled.h3`
  margin-bottom: 0;
  text-transform: uppercase;

  font-size: 18px;
  font-family: 'Montserrat';
  font-weight: 400;
  color: rgb(0, 0, 0);
  line-height: 1.2;
`;

const Title = styled.h1`
  font-size: 46px;
  font-family: 'Montserrat';
  font-weight: 600;
  color: rgb(1, 0, 0);
  line-height: 1.2;

  margin-top: 0;
  text-transform: uppercase;
`;

export default () => (
  <Header>
    <HeaderImage src="https://vignette4.wikia.nocookie.net/leagueoflegends/images/c/c9/ProfileIcon0660_Marksman.png" />
    <Intro>League of mentoring presents</Intro>
    <Title>Patch 7.xx Tierlist!</Title>
  </Header>
);
