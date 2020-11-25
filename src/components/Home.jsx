import React from 'react';
import styled from 'styled-components';
import { isMobileOnly } from 'react-device-detect';
import { COLORS } from './../constants/Colors';

const Styles = styled.div`
  .home-content {
    min-height: 100vh;
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${COLORS.primary};
    white-space: ${isMobileOnly ? 'pre-line' : ''};
  }
  .swipe {
    position: relative;
    width: 100vw;
    &::after {
      display: inline-block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 100%;
      width: 0%;
      height: 100%;
      background-color: ${COLORS.quaternary};
      animation: swipe 1.5s ease-out 1s forwards;
    }
    &--delay {
      &::after {
        background-color: ${COLORS.tertiary};
        animation-delay: 1.5s;
      }
    }
  }

  h1 {
    display: block;
    color: ${COLORS.tertiary};
    font-size: ${isMobileOnly ? '9vw' : '8vw'};
    line-height: 1;
    font-weight: 900;
    text-transform: uppercase;
    padding: 15px 25px;
    opacity: 0;
    animation: fade 0.01s ease-out 1.75s forwards;
  }

  h3 {
    display: block;
    color: ${COLORS.tertiary};
    font-size: ${isMobileOnly ? '4.5vw' : '3vw'};
    line-height: 1;
    font-weight: 900;
    text-transform: uppercase;
    padding: 10px 15px;
    opacity: 0;
    animation: fade 0.01s ease-out 2.25s forwards;
  }

  @media (orientation: landscape) {
    h1 {
      font-size: 8vw;
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes swipe {
    0% {
      right: 100%;
      left: 0;
      width: 0%;
    }
    50% {
      right: 0;
      left: 0;
      width: 100%;
    }
    100% {
      right: 0;
      left: 100%;
      width: 0%;
    }
  }
`;

export const Home = (props) => {
  return (
    <Styles>
      <div className='home-content'>
        <div className='swipe'>
          <h1>Nick {'\n'} Van de Velden</h1>
        </div>
        <div className='swipe swipe--delay'>
          <h3>Senior IT Consultant</h3>
        </div>
      </div>
    </Styles>
  );
};
