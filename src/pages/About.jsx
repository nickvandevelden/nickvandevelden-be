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
    font-size: ${isMobileOnly ? '5vw' : '30px'};
    width: 100vw;
    margin-bottom: ${isMobileOnly ? '10vh' : '25vh'};

    @media only screen and (max-width: 1200px) {
      font-size: ${isMobileOnly ? '5vw' : '2.5vw'};
    }
  }

  .adjectives {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .adjective {
    font-size: ${isMobileOnly ? '7vw' : '90px'};
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 100vw;
    opacity: 0;
    text-align: center;
    text-transform: uppercase;

    @media only screen and (max-width: 1200px) {
      font-size: 7vw;
    }
  }

  @media (orientation: landscape) {
    .description {
      font-size: 2.5vw;
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
