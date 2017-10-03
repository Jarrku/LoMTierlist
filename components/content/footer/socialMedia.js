import React from 'react';
import styled from 'styled-components';

const SocialMedia = styled.div`
  flex: 1;
  display: flex;

  padding: 5px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  padding-right: 10px;

  font-size: 20px;
  font-family: 'Montserrat';
  color: rgb(255, 255, 255);
`;

const Title = styled.div`
  text-transform: uppercase;
  padding-right: 10px;

  font-size: 18px;
  font-family: 'Montserrat';
  font-weight: 400;

  color: rgb(255, 255, 255);
`;

const Link = styled.div`
  color: white;
  font-family: 'Montserrat';
  font-weight: 200;
`;

export default ({ icon, title, link }) => (
  <SocialMedia>
    <Icon src={icon} />
    <Title>{title}</Title>
    <Link>{link}</Link>
  </SocialMedia>
);
