import React from 'react';
import styled from 'styled-components';
import { isMobileOnly } from 'react-device-detect';
import { COLORS } from './../constants/Colors';

const Styles = styled.div`
  .about-content {
    min-height: 50vh;
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${COLORS.tertiary};
    overflow: hidden;
  }

  h1 {
    font-size: 32px/34px;
  }

  h5 {
    font-size: 22px/24px;
  }

  .sentence {
    font-size: ${isMobileOnly ? '7vw' : '4vw'};
    width: 100%;
  }

  .description {
    font-size: ${isMobileOnly ? '5vw' : '3vw'};
    font-weight: 100;
  }

  .words {
    display: block;
    position: relative;
    margin: 20px auto;
  }

  .words-1 span {
    position: absolute;
    width: 100%;
    margin-left: -50%;
    opacity: 0;
    overflow: hidden;
    -webkit-animation: rotateWord 10s linear infinite 0s;
    -ms-animation: rotateWord 10s linear infinite 0s;
    animation: rotateWord 10s linear infinite 0s;
  }

  .words-1 span:nth-child(2) {
    -webkit-animation-delay: 2.5s;
    -ms-animation-delay: 2.5s;
    animation-delay: 2.5s;
  }

  .words-1 span:nth-child(3) {
    -webkit-animation-delay: 5s;
    -ms-animation-delay: 5s;
    animation-delay: 5s;
  }

  .words-1 span:nth-child(4) {
    -webkit-animation-delay: 7.5s;
    -ms-animation-delay: 7.5s;
    animation-delay: 7.5s;
  }

  @-webkit-keyframes rotateWord {
    0% {
      opacity: 0;
    }

    2% {
      opacity: 0;
      -webkit-transform: translateY(-30px);
    }

    5% {
      opacity: 1;
      -webkit-transform: translateY(0px);
    }

    17% {
      opacity: 1;
      -webkit-transform: translateY(0px);
    }

    20% {
      opacity: 0;
      -webkit-transform: translateY(30px);
    }

    80% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  @-ms-keyframes rotateWord {
    0% {
      opacity: 0;
    }

    2% {
      opacity: 0;
      -ms-transform: translateY(-30px);
    }

    5% {
      opacity: 1;
      -ms-transform: translateY(0px);
    }

    17% {
      opacity: 1;
      -ms-transform: translateY(0px);
    }

    20% {
      opacity: 0;
      -ms-transform: translateY(30px);
    }

    80% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes rotateWord {
    0% {
      opacity: 0;
    }

    2% {
      opacity: 0;
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }

    5% {
      opacity: 1;
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }

    17% {
      opacity: 1;
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }

    20% {
      opacity: 0;
      -webkit-transform: translateY(30px);
      transform: translateY(30px);
    }

    80% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
`;

export const About = (props) => {
  return (
    <Styles>
      <div className='about-content'>
        <h2 class='sentence'>
          <div className='description'>Get in touch with me for...</div>
          <div class='words words-1'>
            <span>TESTING</span>
            <span>TEST AUTOMATION</span>
            <span>PRODUCT MANAGEMENT</span>
            <span>WEB DEVELOPMENT</span>
          </div>
        </h2>
      </div>
    </Styles>
  );
};
