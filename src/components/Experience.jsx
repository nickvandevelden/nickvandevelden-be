import React from 'react';
import styled from 'styled-components';
import { isMobileOnly } from 'react-device-detect';
import { COLORS } from './../constants/Colors';
import SamsungImage from './../assets/images/samsung.png';
import CrelanImage from './../assets/images/crelan.png';
import CtgImage from './../assets/images/ctg.png';
import BelfiusImage from './../assets/images/belfius.png';
import ArhsImage from './../assets/images/arhs.png';
import MediahuisImage from './../assets/images/mediahuis.png';

const Styles = styled.div`
  .experience-content {
    min-height: 50vh;
    position: relative;
    width: 100vw;
    background-color: ${COLORS.tertiary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${isMobileOnly ? 'column' : ''};
  }

  .experience-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .experience-row:nth-child(1) {
    padding-top: ${isMobileOnly ? '5%' : '0%'};
    padding-bottom: ${isMobileOnly ? '15%' : '5%'};
  }

  .experience-row:nth-child(2) {
    padding-bottom: ${isMobileOnly ? '12.5%' : '0%'};
  }

  .experience-row:nth-child(3) {
    padding-bottom: 5%;
  }

  .experience-column {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    opacity: 0.5;
  }

  img {
    width: ${isMobileOnly ? '50%' : '25%'};
  }

  .mediahuis img {
    width: ${isMobileOnly ? '70%' : '80%'};
  }

  @media screen and (min-width: 1080px) {
    img {
      width: 25%;
    }
  }
`;

export const Experience = (props) => {
  if (isMobileOnly) {
    return (
      <Styles>
        <div className='experience-content'>
          <div className='experience-table'>
            <div className='experience-row'>
              <div className='experience-column samsung'>
                <img src={SamsungImage} alt='samsung' />
              </div>
              <div className='experience-column crelan'>
                <img src={CrelanImage} alt='crelan' />
              </div>
            </div>
            <div className='experience-row'>
              <div className='experience-column ctg'>
                <img src={CtgImage} alt='ctg' />
              </div>
              <div className='experience-column belfius'>
                <img src={BelfiusImage} alt='belfius' />
              </div>
            </div>
            <div className='experience-row'>
              <div className='experience-column arhs'>
                <img src={ArhsImage} alt='arhs' />
              </div>
              <div className='experience-column mediahuis'>
                <img src={MediahuisImage} alt='mediahuis' />
              </div>
            </div>
          </div>
        </div>
      </Styles>
    );
  } else {
    return (
      <Styles>
        <div className='experience-content'>
          <div className='experience-table'>
            <div className='experience-row'>
              <div className='experience-column'>
                <img src={SamsungImage} alt='samsung' />
              </div>
              <div className='experience-column'>
                <img src={CrelanImage} alt='crelan' />
              </div>
              <div className='experience-column'>
                <img src={CtgImage} alt='ctg' />
              </div>
            </div>
            <div className='experience-row'>
              <div className='experience-column'>
                <img src={BelfiusImage} alt='belfius' />
              </div>
              <div className='experience-column'>
                <img src={ArhsImage} alt='arhs' />
              </div>
              <div className='experience-column'>
                <img src={MediahuisImage} alt='mediahuis' />
              </div>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
};
