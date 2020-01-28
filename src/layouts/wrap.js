/** @jsx jsx */

import { Link } from 'gatsby'
import { Component } from 'react'
import { Global, css, jsx } from '@emotion/core'
import { GlobalStyles, ColorsAdvanced, Colors } from '../styles/main'

import devIcon from '../assets/images/icons/dev.png'
import githubIcon from '../assets/images/icons/github.png'
import instagramIcon from '../assets/images/icons/instagram.png'
import linkedinIcon from '../assets/images/icons/linkedin.png'
import twitterIcon from '../assets/images/icons/twitter.png'

export default class Wrap extends Component {
  render = () => {
    return (
      <div
        css={css`
          .side-bar {
            position: fixed;
            top: 0;
            bottom: 0;
            width: 10rem;
            padding: 2rem;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-between;
            z-index: 2;

            @media screen and (max-width: 500px) {
              position: initial;
              display: block;
              width: 100%;
              padding-bottom: 0;
            }
          }
        `}>
        <Global styles={GlobalStyles} />
        <div
          className="side-bar"
          css={css`
            left: 0;
          `}>
          <Link
            to="/"
            css={css`
              letter-spacing: 0.5rem;
              text-transform: uppercase;
              font-size: 0.8rem;
              line-height: 2rem;
              position: relative;
              top: -0.6rem;
              > div {
                @media screen and (max-width: 500px) {
                  display: inline;
                  white-space: nowrap;
                }
              }
            `}>
            <div className="mr-3">Chandu</div>
            <div>J S</div>
          </Link>
          <a href="#" className="contact-button"></a>
        </div>
        <div
          className="side-bar text-right"
          css={css`
            right: 0;
            width: 8rem;
            @media screen and (max-width: 500px) {
              position: initial;
              top: 0;
              right: 0;
              bottom: initial;
              width: initial;
              padding-top: 0;
              text-align: left !important;
              margin-bottom: -1rem;
            }
          `}>
          <nav
            css={css`
              a {
                font-weight: bold;
                text-transform: lowercase;
                font-size: 1.4rem;
                position: relative;
                transition-duration: 0.2s;
                transform: translateY(0.1rem);
                display: inline-block;
                margin-bottom: 2rem;
                margin-top: -1rem;
                &:before {
                  content: '';
                  border-bottom: 2px solid;
                  position: absolute;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  color: ${Colors.accent};
                  transition-duration: 0.2s;
                  opacity: 0;
                  transform: translateY(-0.7rem);
                  transition: color 0.5s;
                  .lights-on & {
                    color: ${ColorsAdvanced.accentLightsOn};
                  }
                }
                &.active {
                  color: ${Colors.accent};
                  .lights-on & {
                    color: ${ColorsAdvanced.accentLightsOn};
                  }
                }
                &:hover {
                  transform: translateY(0rem);
                  color: #fff;
                  .lights-on & {
                    color: #000;
                  }
                  &:before {
                    opacity: 1;
                    transform: translateY(0rem);
                  }
                }
                @media screen and (max-width: 500px) {
                  margin-right: 2rem;
                  margin-bottom: 1rem;
                  margin-top: 0rem;
                }
              }
            `}>
            <Link to="/works">Works</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
          </nav>
          <div
            css={css`
              right: 2rem;
              bottom: 2rem;
              position: absolute;
              @media screen and (max-width: 500px) {
                position: absolute;
                left: 0;
                right: 0;
                bottom: initial;
                -webkit-box-ordinal-group: 2;
                order: 1;
                width: 100%;
                display: block;
                padding-left: 1.6rem;
              }
              a {
                display: block;
                width: 2.3rem;
                height: 2.3rem;
                margin-top: 1rem;
                background-position: center;
                background-size: 1.5rem;
                background-repeat: no-repeat;
                opacity: 0.5;
                transition-duration: 0.2s;
                @media screen and (max-width: 500px) {
                  display: inline-block;
                }
                .lights-on & {
                  opacity: 0.7;
                  filter: invert(1);
                }
                &:last-child {
                  margin-bottom: 0;
                }
                &:hover {
                  opacity: 1;
                }
                &[alt='DEV Community'] {
                  background-image: url(${devIcon});
                }
                &[alt='GitHub'] {
                  background-image: url(${githubIcon});
                }
                &[alt='Instagram'] {
                  background-image: url(${instagramIcon});
                }
                &[alt='LinkedIn'] {
                  background-image: url(${linkedinIcon});
                }
                &[alt='Twitter'] {
                  background-image: url(${twitterIcon});
                }
              }
            `}>
            <a
              href="https://dev.to/ctrleffive"
              target="_blank"
              className="social-icon"
              rel="noreferrer"
              alt="DEV Community"></a>
            <a
              href="https://github.com/ctrleffive"
              target="_blank"
              className="social-icon"
              rel="noreferrer"
              alt="GitHub"></a>
            <a
              href="https://instagram.com/ctrleffive"
              target="_blank"
              className="social-icon"
              rel="noreferrer"
              alt="Instagram"></a>
            <a
              href="https://linkedin.com/in/ctrleffive"
              target="_blank"
              className="social-icon"
              rel="noreferrer"
              alt="LinkedIn"></a>
            <a
              href="https://twitter.com/ctrleffive"
              target="_blank"
              className="social-icon"
              rel="noreferrer"
              alt="Twitter"></a>
          </div>
        </div>
        <div className="bg-animator"></div>
        {this.props.children}
      </div>
    )
  }
}
