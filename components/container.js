import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import getTheme from './themes';
import Sidebar from './sidebar';
import Content from './content';

const Container = styled.div`
  display: flex;

  max-width: 1500px;
  max-height: 2200px;

  /** Background color to fill up when image ends */
  background-color: ${props => props.theme.bg};
`;

const adc = getTheme('adc');

const src =
  'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Annie.png';
const initialProps = {
  header: {
    patchNumber: '7.29',
    role: 'adc'
  },
  tierlist: [
    {
      division: 'bronze',
      tiers: [
        {
          name: 'S',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'A',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'B',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'C',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        }
      ]
    },
    {
      division: 'silver',
      tiers: [
        {
          name: 'S',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'A',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'B',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'C',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        }
      ]
    },
    {
      division: 'gold',
      tiers: [
        {
          name: 'S',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'A',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'B',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'C',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        }
      ]
    },
    {
      division: 'platinum',
      tiers: [
        {
          name: 'S',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'A',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'B',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'C',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        }
      ]
    },
    {
      division: 'diamond',
      tiers: [
        {
          name: 'S',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'A',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'B',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'C',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        }
      ]
    },
    {
      division: 'master',
      tiers: [
        {
          name: 'S',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'A',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'B',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        },
        {
          name: 'C',
          champions: [
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' },
            { iconUrl: src, name: 'Annie' }
          ]
        }
      ]
    }
  ],
  changes: {
    buffed: [],
    nerfed: [
      {
        name: 'annie',
        icon:
          'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Annie.png'
      }
    ],
    unchanged: []
  },
  highlights: {
    splashUrl:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
    text: `
    Lorem ipsum dolor sit amet. Vestibulum commodo volutpat a, convallis ac,
    laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis.
    Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada
    fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.
    Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor
    fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa
    ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius
    in, paragraph.`
  }
};

export default () => (
  <ThemeProvider theme={adc}>
    <Container>
      <Sidebar impressionText="ImpressionText Hoisted" />
      <Content {...initialProps} />
    </Container>
  </ThemeProvider>
);
