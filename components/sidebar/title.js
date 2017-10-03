import React from 'react';
import styled from 'styled-components';

const bgUrl = '/static/titleBanner.png';

const Title = styled.div`
  padding: 15px 10px;
  margin-bottom: 10px;

  text-transform: uppercase;
  background-image: url("${bgUrl}");
  background-size: cover;
  background-repeat: no-repeat;  
  
  font-size: 26.76px;
  font-family: 'GlacialIndifferenceBold';
  font-weight: normal;
  font-style: normal;

  color: rgb(54, 54, 54);
`;

export default ({ children }) => <Title>{children}</Title>;
