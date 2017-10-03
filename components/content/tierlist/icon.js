import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
  padding: 6px;
  width: 40px;
  height: 40px;
`;

export default ({ iconUrl, name }) => <Icon src={iconUrl} alt={name} />;
