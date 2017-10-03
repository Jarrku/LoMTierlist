import React from 'react';
import styled from 'styled-components';

import Header from './header';
import Tierlist from './tierlist';
import Changes from './changes';
import Highlights from './highlights';
import Footer from './footer';

const Container = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  background-image: url('/static/SR.png');
  /*  background-image: url('https://vignette3.wikia.nocookie.net/leagueoflegends/images/d/d3/Summoners_rift_platform.png');
  
*/
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
`;

export default () => (
  <Container>
    <Content>
      <Header />
      <Tierlist />
      <Changes />
      <Highlights />
    </Content>
    <Footer />
  </Container>
);

/*
  <div className="container">
    <div className="box box1">
      <div className="nestedBox">
        <p>TEXT 1</p>
      </div>
      <div className="nestedBox">
        <div className="txtBox">TEXT 2</div>
      </div>
    </div>
    <div className="box">2</div>
    <style global jsx>{`
      .container {
        background-image: url('https://farm5.staticflickr.com/4199/34992095661_f4e315253c_h.jpg');
        height: 20vw;
        display: flex;
        border: 6px solid yellow;
      }

      .box {
        flex: 1;
      P

      .box1 {
        display: flex;
        border: 3px solid black;
        justify-content: center;
      }

      .nestedBox {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        background-color: rgba(255, 0, 0, 0.4);
      }
    `}</style>
  </div>
);

*/
