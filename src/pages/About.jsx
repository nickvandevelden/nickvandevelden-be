import React from 'react';
import styled from 'styled-components';
import { isMobileOnly } from 'react-device-detect';

const Styles = styled.div`
  .about-content {
    min-height: 50vh;
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
  }

  .description {
    font-size: ${isMobileOnly ? '4.5vw' : '3vw'};
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8vh;
  }

  .adjectives {
    position: relative;
    width: 100%;
  }

  .adjective {
    font-size: ${isMobileOnly ? '9vw' : '7vw'};
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 100vw;
    opacity: 0;
    text-align: center;
    text-transform: uppercase;
  }

  @media (orientation: landscape) {
    .description {
      font-size: 3vw;
    }

    .adjective {
      font-size: 7vw;
    }
  }

  .testing {
    animation: rotate-text-up1 10s infinite;
  }

  .test-automation {
    animation: rotate-text-up2 10s infinite;
  }

  .product-management {
    animation: rotate-text-up3 10s infinite;
  }

  .web-development {
    animation: rotate-text-up4 10s infinite;
  }

  @keyframes rotate-text-up1 {
    0% {
      transform: translate3d(0, 80px, 0);
      opacity: 0;
    }

    4%,
    21% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }

    25% {
      transform: translate3d(0, -40px, 0);
      opacity: 0;
    }
  }

  @keyframes rotate-text-up2 {
    25% {
      transform: translate3d(0, 80px, 0);
      opacity: 0;
    }

    29%,
    46% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }

    50% {
      transform: translate3d(0, -40px, 0);
      opacity: 0;
    }
  }

  @keyframes rotate-text-up3 {
    50% {
      transform: translate3d(0, 80px, 0);
      opacity: 0;
    }

    54%,
    71% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }

    75% {
      transform: translate3d(0, -40px, 0);
      opacity: 0;
    }
  }

  @keyframes rotate-text-up4 {
    75% {
      transform: translate3d(0, 80px, 0);
      opacity: 0;
    }

    79%,
    96% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }

    100% {
      transform: translate3d(0, -40px, 0);
      opacity: 0;
    }
  }
`;

export const About = (props) => {
  return (
    <Styles>
      <div className='about-content'>
        <div className='description'>Get in touch with me for...</div>
        <div className='adjectives'>
          <h2 className='adjective testing'>Testing</h2>
          <h2 className='adjective test-automation'>Test Automation</h2>
          <h2 className='adjective product-management'>Product Management</h2>
          <h2 className='adjective web-development'>Web Development</h2>
        </div>
      </div>
    </Styles>
  );
};