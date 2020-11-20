import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .home-content {
    min-height: 100vh;
    position: relative;
    width: 100vw;
    display: flex;
    background-color: #fcba03;
    justify-content: center;
    align-items: center;
    font-family: 'Luckiest Guy', cursive;
  }

  h1 {
    margin: 0;
    font-size: 10vw;
    padding: 0;
    color: #04fafa;
    text-shadow: 0 0.1em 20px rgba(0, 0, 0, 1), 0.05em -0.03em 0 rgba(0, 0, 0, 1),
      0.05em 0.005em 0 rgba(0, 0, 0, 1), 0em 0.08em 0 rgba(0, 0, 0, 1),
      0.05em 0.08em 0 rgba(0, 0, 0, 1), 0px -0.03em 0 rgba(0, 0, 0, 1),
      -0.03em -0.03em 0 rgba(0, 0, 0, 1), -0.03em 0.08em 0 rgba(0, 0, 0, 1),
      -0.03em 0 0 rgba(0, 0, 0, 1);
    span {
      transform: scale(0.9);
      display: inline-block;
    }
    span:nth-child(1) {
      animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
    }
    span:nth-child(2) {
      animation: bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
    }
    span:nth-child(3) {
      animation: bopB 1s 0.3s cubic-bezier(0.2, 0.9, 0.32, 1.275) forwards infinite alternate;
    }
    span:nth-child(4) {
      animation: bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
    }
  }

  @keyframes bop {
    0% {
      transform: scale(0.9);
    }
    50%,
    100% {
      transform: scale(1);
    }
  }

  @keyframes bopB {
    0% {
      transform: scale(0.9);
    }
    80%,
    100% {
      transform: scale(1) rotateZ(-3deg);
    }
  }
`;

export const Home = (props) => {
  return (
    <Styles>
      <div className='home-content'>
        <h1>
          <span>NICK</span> <span>VAN</span> <span>DE</span> <span>VELDEN</span>
        </h1>
      </div>
    </Styles>
  );
};
