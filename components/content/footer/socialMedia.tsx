import * as React from 'react';
import styled from 'styled-components';

const SocialMedia = styled.div`
  padding: 5px;
  display: flex;
  flex: 1;

  font-family: 'Montserrat';
  color: ${props => props.theme.content.footer.colour};
`;

const Icon = styled.img`
  padding-right: 10px;

  width: 30px;
  height: 30px;

  font-size: 20px;
`;

const Title = styled.div`
  padding-right: 10px;

  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
`;

const Link = styled.div`font-weight: 200;`;

export interface Props {
  icon: string;
  title: string;
  link: string;
}

export default ({ icon, title, link }: Props) => (
  <SocialMedia>
    <Icon src={icon} />
    <Title>{title}</Title>
    <Link>{link}</Link>
  </SocialMedia>
);
