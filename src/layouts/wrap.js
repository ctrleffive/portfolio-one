/** @jsx jsx */

import { Link, StaticQuery } from 'gatsby'
import { Component } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Global, css, jsx } from '@emotion/core'
import { GlobalStyles, ColorsAdvanced, Colors } from '../styles/main'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

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
                person {
                  name {
                    first
                    last
                  }
                  email
                }
                siteUrl
                social {
                  icon
                  service
                  url
                }
              }
            }
          }
        `}
        render={({ site }) => {
          const { siteMetadata } = site
          const metaTags = {
            title: this.props.title || siteMetadata.title,
            description: this.props.description || ``,
          }
          let cover
          if (this.props.cover) {
            cover = siteMetadata.siteUrl + this.props.cover
          } else {
            cover = `${siteMetadata.siteUrl}/images/cover.png`
          }
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
                defaultTitle={metaTags.title}
                meta={[
                  { name: `theme-color`, content: ColorsAdvanced.main },
                  { name: `description`, content: metaTags.description },

                  // <!-- Google / Search Engine Tags -->
                  { itemprop: 'name', content: metaTags.title },
                  { itemprop: 'description', content: metaTags.description },
                  { itemprop: 'image', content: cover },

                  // <!-- Facebook Meta Tags -->
                  { property: 'og:type', content: 'website' },
                  { property: 'og:url', content: siteMetadata.siteUrl },
                  { property: 'og:title', content: metaTags.title },
                  { property: 'og:description', content: metaTags.description },
                  { property: 'og:image', content: cover },

                  // <!-- Twitter Meta Tags -->
                  { name: 'twitter:card', content: 'summary_large_image' },
                  { name: 'twitter:title', content: metaTags.title },
                  {
                    name: 'twitter:description',
                    content: metaTags.description,
                  },
                  { name: 'twitter:image', content: cover },
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
                  <div className="mr-3">{siteMetadata.person.name.first}</div>
                  <div>{siteMetadata.person.name.last}</div>
                </Link>
                <OutboundLink
                  eventLabel="Contact"
                  href={`mailto:${siteMetadata.person.email}`}
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
                </OutboundLink>
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
                    }
                  `}>
                  {siteMetadata.social.map((item) => {
                    return (
                      <OutboundLink
                        eventLabel={`Social Media (${item.service})`}
                        href={item.url}
                        target="_blank"
                        className="social-icon"
                        rel="noopener noreferrer"
                        alt={item.service}
                        css={css`
                          background-image: url('/images/icons/${item.icon}.png');
                        `}>
                        {item.service}
                      </OutboundLink>
                    )
                  })}
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
