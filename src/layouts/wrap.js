/** @jsx jsx */

import { Link, StaticQuery } from 'gatsby'
import { Component } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Global, css, jsx } from '@emotion/core'
import { GlobalStyles, ColorsAdvanced, Colors } from '../styles/main'

import devIcon from '../assets/images/icons/dev.png'
import telegramIcon from '../assets/images/icons/telegram.png'
import githubIcon from '../assets/images/icons/github.png'
import instagramIcon from '../assets/images/icons/instagram.png'
import linkedinIcon from '../assets/images/icons/linkedin.png'
import twitterIcon from '../assets/images/icons/twitter.png'

export default class Wrap extends Component {
  render = () => {
    const styles = css`
      ${GlobalStyles}
      body {
        color: ${this.props.lightsOn
          ? ColorsAdvanced.secondaryLightsOn
          : ColorsAdvanced.secondary};
        background-color: ${this.props.lightsOn
          ? ColorsAdvanced.mainLightsOn
          : ColorsAdvanced.main};
      }
    `

    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                social {
                  service
                  url
                }
                emails
              }
            }
          }
        `}
        render={({ site }) => {
          const emailIndex = Math.ceil(
            Math.random() * (site.siteMetadata.emails.length - 1 - 0) + 0
          )
          return (
            <div
              className={this.props.lightsOn ? 'lights-on' : ''}
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

                  @media screen and (max-width: 766px) {
                    position: initial;
                    display: block;
                    width: 100%;
                    padding-bottom: 0;
                  }
                }
              `}>
              <Helmet
                base="/"
                defaultTitle={this.props.seoTitle || site.siteMetadata.title}
                meta={[
                  {
                    name: `description`,
                    content: this.props.seoDescription || ``,
                  },
                  { name: `keywords`, content: this.props.seoKeywords || `` },
                ]}>
                <html lang="en" />
              </Helmet>
              <Global styles={styles} />
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
                      @media screen and (max-width: 766px) {
                        display: inline;
                        white-space: nowrap;
                      }
                    }
                  `}>
                  <div className="mr-3">Chandu</div>
                  <div>J S</div>
                </Link>
                <a
                  href={`mailto:${site.siteMetadata.emails[emailIndex]}@chandujs.dev`}
                  css={css`
                    border-radius: 100%;
                    background-color: ${Colors.accent};
                    width: 3rem;
                    height: 3rem;
                    display: block;
                    position: relative;
                    transition: background-color 0.5s;
                    color: transparent !important;
                    .lights-on & {
                      background-color: ${ColorsAdvanced.accentLightsOn};
                    }
                    &:before,
                    &:after {
                      content: '';
                      border: 1px solid rgba(0, 0, 0, 0.6);
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                      transition: border-color 0.5s;
                      .lights-on & {
                        border-color: rgba(255, 255, 255, 0.9);
                      }
                    }
                    &:before {
                      width: 1.5rem;
                      height: 1.1rem;
                      border-radius: 3px;
                    }
                    &:after {
                      width: 1rem;
                      height: 1rem;
                      border-left: 0;
                      border-top: 0;
                      transform: translate(-50%, -50%) rotate(45deg);
                      margin-top: -5px;
                    }
                    @media screen and (max-width: 766px) {
                      display: none;
                    }
                  `}>
                  email
                </a>
              </div>
              <div
                className="side-bar text-right"
                css={css`
                  right: 0;
                  width: 8rem;
                  @media screen and (max-width: 766px) {
                    position: initial;
                    top: 0;
                    right: 0;
                    bottom: initial;
                    width: initial;
                    padding-top: 1rem !important;
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
                      @media screen and (max-width: 766px) {
                        margin-right: 2rem;
                        margin-bottom: 1rem;
                        margin-top: 0rem;
                      }
                    }
                    @media screen and (min-width: 766px) and (max-height: 610px) {
                      right: 3.8rem;
                      position: relative;
                    }
                  `}>
                  <Link
                    className={this.props.isWorkPage ? 'active' : ''}
                    activeClassName="active"
                    to="/work">
                    Work
                  </Link>
                  <Link
                    className={this.props.isBlogPage ? 'active' : ''}
                    activeClassName="active"
                    to="/blog">
                    Blog
                  </Link>
                  <Link activeClassName="active" to="/about">
                    About
                  </Link>
                  <Link activeClassName="active" to="/uses">
                    Uses
                  </Link>
                </nav>
                <div
                  css={css`
                    right: 2rem;
                    bottom: 2rem;
                    position: absolute;
                    @media screen and (max-width: 766px) {
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
                    @media screen and (min-width: 766px) and (max-height: 610px) {
                      bottom: initial;
                      top: 0.7rem;
                      right: 1.8rem;
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
                      font-size: 0;
                      @media screen and (max-width: 766px) {
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
                      &[alt='Telegram'] {
                        background-image: url(${telegramIcon});
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
                  {site.siteMetadata.social.map(item => (
                    <a
                      href={item.url}
                      target="_blank"
                      className="social-icon"
                      rel="noopener noreferrer"
                      alt={item.service}>
                      {item.service}
                    </a>
                  ))}
                </div>
              </div>
              <div
                css={css`
                  animation: fadeIn 0.2s ease-in-out;

                  @keyframes fadeIn {
                    0% {
                      opacity: 0;
                      margin-top: 0.5rem;
                    }
                    100% {
                      opacity: 1;
                      margin-top: 0;
                    }
                  }
                `}>
                {this.props.children}
                <div
                  css={css`
                    top: 50%;
                    left: 50%;
                    z-index: -1;
                    opacity: 0.1;
                    position: fixed;
                    transform: translate(calc(50% - 35rem), -50%);
                    max-height: 100%;

                    .lights-on & {
                      opacity: 0.05;
                      filter: grayscale(1);
                    }

                    @media screen and (max-width: 1000px) {
                      transform: translate(-50%, -50%);
                    }
                    @media screen and (max-width: 766px) {
                      transform: translate(-25%, -50%);
                    }
                  `}
                  alt="">
                  {this.props.pageBg}
                </div>
              </div>
            </div>
          )
        }}
      />
    )
  }
}
