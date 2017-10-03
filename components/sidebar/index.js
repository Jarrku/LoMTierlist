import React from 'react';
import styled from 'styled-components';

import Impression from './impression';
import Grades from './grades';
import Notes from './notes';

const Sidebar = styled.div`
  background-color: #363636;
  /**TODO   box-shadow:
 */
  flex: 1.2;
  display: flex;
  flex-direction: column;
`;

// reverse order due to column reverse;
export default () => (
  <Sidebar>
    <Grades />
    <Impression />
    <Notes />
  </Sidebar>
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
