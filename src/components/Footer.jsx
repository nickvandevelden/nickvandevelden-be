import React from 'react';
import styled from 'styled-components';
import { isMobileOnly } from 'react-device-detect';
import { COLORS } from '../constants/Colors';

const Styles = styled.div`
  .footer-content {
    min-height: 12.5vh;
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${COLORS.primary};
    color: ${COLORS.tertiary};
    font-size: ${isMobileOnly ? '4vw' : '1.5vw'};
  }
  .copyright {
    padding-bottom: 1%;
  }

  .made-with {
    font-size: ${isMobileOnly ? '2.5vw' : '1vw'};
  }
`;

export const Footer = (props) => {
  return (
    <Styles>
      <div className='footer-content'>
        <div className='copyright'>© 2020 - Nick Van de Velden - All rights reserved</div>
        <div className='made-with'>Made from scratch with ReactJS</div>
      </div>
    </Styles>
  );
};
