import React from 'react';
import styled from 'styled-components';
import {
  GrFacebook as FacebookIcon,
  GrInstagram as InstagramIcon,
  GrGithub as GithubIcon,
} from 'react-icons/gr';
import { BsEnvelope as EmailIcon } from 'react-icons/bs';
import { isMobileOnly } from 'react-device-detect';
import { COLORS } from './../constants/Colors';
import Bounce from 'react-reveal/Bounce';

const Styles = styled.div`
  .contact-content {
    min-height: 50vh;
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${COLORS.secondary};
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${isMobileOnly ? 'column' : ''};
    font-size: ${isMobileOnly ? '10vw' : '5vw'};
  }

  .icon {
    margin-left: ${isMobileOnly ? '' : '4vw'};
    margin-right: ${isMobileOnly ? '' : '4vw'};
    margin-top: ${isMobileOnly ? '2.5vh' : ''};
    margin-bottom: ${isMobileOnly ? '2.5vh' : ''};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.text};
    transition: 0.3s;
    &:hover {
      color: ${COLORS.tertiary};
    }
  }
`;

export const Contact = (props) => {
  return (
    <Styles>
      <div className='contact-content'>
        <div className='icons'>
          <div className='icon facebook'>
            <Bounce bottom>
              <a
                href='https://www.facebook.com/nick.vandevelden.3/'
                target='_blank'
                rel='noreferrer'
              >
                <FacebookIcon />
              </a>
            </Bounce>
          </div>
          <div className='icon instagram'>
            <Bounce bottom>
              <a href='https://www.instagram.com/nickvandevelden/' target='_blank' rel='noreferrer'>
                <InstagramIcon />
              </a>
            </Bounce>
          </div>
          <div className='icon github'>
            <Bounce bottom>
              <a href='https://github.com/nickvandevelden/' target='_blank' rel='noreferrer'>
                <GithubIcon />
              </a>
            </Bounce>
          </div>
          <div className='icon email'>
            <Bounce bottom>
              <a href='mailto: nickvandevelden@hotmail.com'>
                <EmailIcon />
              </a>
            </Bounce>
          </div>
        </div>
      </div>
    </Styles>
  );
};
