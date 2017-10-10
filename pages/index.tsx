import * as React from 'react';

import Container from '../components/resultPage/container';
import { Props } from '../components/resultPage/interfaces';

/* tslint:disable */

const src =
  'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Annie.png';
const initialProps: Props = {
  theme: 'adc',
  impression: 'ImpressionFillerText',
  header: {
    patchNumber: '7.29',
    role: 'adc'
  },
  tierlist: [
    {
      division: 'bronze',
      tiers: {
        s: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        a: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        b: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        c: [
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
    },
    {
      division: 'silver',
      tiers: {
        s: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        a: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        b: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        c: [
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
    },
    {
      division: 'gold',
      tiers: {
        s: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        a: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        b: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        c: [
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
    },
    {
      division: 'platinum',
      tiers: {
        s: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        a: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        b: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        c: [
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
    },
    {
      division: 'diamond',
      tiers: {
        s: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        a: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        b: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        c: [
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
    },
    {
      division: 'master',
      tiers: {
        s: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        a: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        b: [
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' },
          { iconUrl: src, name: 'Annie' }
        ],
        c: [
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
    }
  ],
  changes: {
    buffed: [],
    nerfed: [
      {
        name: 'annie',
        iconUrl:
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

export default () => <Container {...initialProps} />;
