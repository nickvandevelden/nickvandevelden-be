import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .landscape-content {
    min-height: 100vh;
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #222;
  }

  h1 {
    display: block;
    color: #fff;
    font-size: 9vh;
    line-height: 1;
    font-weight: 900;
    text-transform: uppercase;
    padding: 15px 25px;
  }
`;

export const Landscape = (props) => {
  return (
    <Styles>
      <div className='landscape-content'>
        <h1>Please rotate your device for the best experience.</h1>
      </div>
    </Styles>
  );
};
