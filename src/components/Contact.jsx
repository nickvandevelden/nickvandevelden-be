import React from 'react';
import styled from 'styled-components';
import {
  GrFacebook as FacebookIcon,
  GrInstagram as InstagramIcon,
  GrGithub as GithubIcon,
} from 'react-icons/gr';
import { BsEnvelope as EmailIcon } from 'react-icons/bs';
import { isMobileOnly } from 'react-device-detect';
import { COLORS } from '../constants/Colors';
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
    margin-top: ${isMobileOnly ? '3vh' : ''};
    margin-bottom: ${isMobileOnly ? '3vh' : ''};
  }

  a {
    color: ${COLORS.tertiary};
    transition: 0.5s;
    &:hover {
      color: ${isMobileOnly ? COLORS.tertiary : COLORS.text};
      font-size: ${isMobileOnly ? '10vw' : '7vw'};
    }
  }

  .react-reveal {
    display: flex;
  }
`;

export const Contact = (props) => {
  if (isMobileOnly) {
    return (
      <Styles>
        <div className='contact-content'>
          <div className='icons'>
            <div className='icon facebook'>
              <a
                href='https://www.facebook.com/nick.vandevelden.3/'
                target='_blank'
                rel='noreferrer'
              >
                <Bounce bottom>
                  <FacebookIcon />
                </Bounce>
              </a>
            </div>
            <div className='icon instagram'>
              <a href='https://www.instagram.com/nickvandevelden/' target='_blank' rel='noreferrer'>
                <Bounce bottom>
                  <InstagramIcon />
                </Bounce>
              </a>
            </div>
            <div className='icon github'>
              <a href='https://github.com/nickvandevelden/' target='_blank' rel='noreferrer'>
                <Bounce bottom>
                  <GithubIcon />
                </Bounce>
              </a>
            </div>
            <div className='icon email'>
              <a href='mailto: nickvandevelden@hotmail.com'>
                <Bounce bottom>
                  <EmailIcon />
                </Bounce>
              </a>
            </div>
          </div>
        </div>
      </Styles>
    );
  } else {
    return (
      <Styles>
        <div className='contact-content'>
          <div className='icons'>
            <div className='icon facebook'>
              <a
                href='https://www.facebook.com/nick.vandevelden.3/'
                target='_blank'
                rel='noreferrer'
              >
                <FacebookIcon />
              </a>
            </div>
            <div className='icon instagram'>
              <a href='https://www.instagram.com/nickvandevelden/' target='_blank' rel='noreferrer'>
                <InstagramIcon />
              </a>
            </div>
            <div className='icon github'>
              <a href='https://github.com/nickvandevelden/' target='_blank' rel='noreferrer'>
                <GithubIcon />
              </a>
            </div>
            <div className='icon email'>
              <a href='mailto: nickvandevelden@hotmail.com'>
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
};
