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
import Bounce from 'react-reveal/Bounce';

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
    padding-bottom: ${isMobileOnly ? '15%' : '5%'};
  }

  .experience-row:nth-child(2) {
    padding-bottom: ${isMobileOnly ? '15%' : '0%'};
  }

  .experience-row:nth-child(3) {
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
    max-width: ${isMobileOnly ? '65%' : '50%'};
  }
`;

export const Experience = (props) => {
  if (isMobileOnly) {
    return (
      <Styles>
        <div className='experience-content'>
          <div className='experience-table'>
            <div class='experience-row'>
              <div class='experience-column'>
                <Bounce bottom>
                  <img src={SamsungImage} alt='samsung' />
                </Bounce>
              </div>
              <div class='experience-column'>
                <Bounce bottom>
                  <img src={CrelanImage} alt='crelan' />
                </Bounce>
              </div>
            </div>
            <div class='experience-row'>
              <div class='experience-column'>
                <Bounce bottom>
                  <img src={CtgImage} alt='ctg' />
                </Bounce>
              </div>
              <div class='experience-column'>
                <Bounce bottom>
                  <img src={BelfiusImage} alt='belfius' />
                </Bounce>
              </div>
            </div>
            <div class='experience-row'>
              <div class='experience-column'>
                <Bounce bottom>
                  <img src={ArhsImage} alt='arhs' />
                </Bounce>
              </div>
              <div class='experience-column'>
                <Bounce bottom>
                  <img src={MediahuisImage} alt='mediahuis' />
                </Bounce>
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
            <div class='experience-row'>
              <div class='experience-column'>
                <Bounce bottom>
                  <img src={SamsungImage} alt='samsung' />
                </Bounce>
              </div>
              <div class='experience-column'>
                <Bounce bottom>
                  <img src={CrelanImage} alt='crelan' />
                </Bounce>
              </div>
              <div class='experience-column'>
                <Bounce bottom>
                  <img src={CtgImage} alt='ctg' />
                </Bounce>
              </div>
            </div>
            <div class='experience-row'>
              <div class='experience-column'>
                <Bounce bottom>
                  <img src={BelfiusImage} alt='belfius' />
                </Bounce>
              </div>
              <div class='experience-column'>
                <Bounce bottom>
                  <img src={ArhsImage} alt='arhs' />
                </Bounce>
              </div>
              <div class='experience-column'>
                <Bounce bottom>
                  <img src={MediahuisImage} alt='mediahuis' />
                </Bounce>
              </div>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
};
