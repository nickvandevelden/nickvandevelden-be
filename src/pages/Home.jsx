import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .home-content {
    min-height: 100vh;
    position: relative;
    width: 100vw;
    display: flex;
    background-color: #2e2473;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    position: relative;
  }

  h1 {
    font-size: 10vw;
    color: #6cd9ce;
    transform: translateY(-600px);
    animation: 1.2s slideIn ease-in-out forwards 1s;
    z-index: 10;
    opacity: 0;
    position: relative;
  }

  h1::before {
    content: '';
    width: 0%;
    height: 50%;
    background-color: #d93ba1;
    position: absolute;
    bottom: -10%;
    animation: 1s underline ease-in-out forwards 2s;
    mix-blend-mode: screen;
  }

  .overlay {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    opacity: 0;
    left: 0;
    right: 0;
    background-color: #d93ba1;
    transform: scale(0.5);
    animation: 0.5s slideIn ease-in-out forwards, 1s skewBg ease-in-out;
  }

  @keyframes skewBg {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes underline {
    100% {
      width: 100%;
    }
  }

  @keyframes slideIn {
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export const Home = (props) => {
  return (
    <Styles>
      <div className='home-content'>
        <h1>Nick Van de Velden</h1>
      </div>
    </Styles>
  );
};
