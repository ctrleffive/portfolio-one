/** @jsx jsx */

import { StaticQuery, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { GlobalStyles, ColorsAdvanced, Colors } from '../styles/main'
import { Component } from 'react'

import PageBg from '../assets/images/bgs/uses.svg'

export default class UsesPage extends Component {
  render = () => {
    return (
      <Wrap pageBg={<PageBg />} seoTitle="Uses | Chandu J S">
        <div
          css={css`
            li {
              line-height: 2;
              &:hover > span {
                color: ${Colors.accent};
                .lights-on & {
                  color: ${ColorsAdvanced.accentLightsOn};
                }
              }
            }
          `}
          className="content-wrap">
          <div className="h1 font-weight-bold mb-3">
            <span className="high">Uses</span>
            <span className="blinker">.</span>
            <br />
          </div>
          <div
            className="h5 mb-4 pb-4"
            css={css`
              line-height: 1.3;
            `}>
            Curious to know what I use on a daily basis? Just check it out here.{' '}
            <br />
            My setup will change time to time. But I will try to keep this
            uptodate.
            <span
              css={css`
                margin-left: 5px;
              `}
              role="img"
              aria-label="smile">
              😃
            </span>
          </div>

          <StaticQuery
            query={graphql`
              query {
                site {
                  siteMetadata {
                    uses {
                      title
                      items {
                        emoji
                        name
                        description
                        link
                      }
                      description
                    }
                  }
                }
              }
            `}
            render={({ site }) => (
              <div className="row">
                {site.siteMetadata.uses.map(section => (
                  <div className="col-md-6 mb-4 mt-1">
                    <div className="h3 mb-2">{section.title}</div>
                    <p className={section.description ? `mb-4` : `pb-0`}>
                      {section.description}
                    </p>
                    <ul className="no-bullets">
                      {section.items.map(item => (
                        <li>
                          {item.emoji ? (
                            <span
                              role="img"
                              aria-label="smile"
                              css={css`
                                display: inline-block;
                                width: 2.3rem;
                              `}>
                              {item.emoji}
                            </span>
                          ) : (
                            ''
                          )}
                          <span
                            css={css`
                              font-weight: ${item.description
                                ? 'bold'
                                : 'inherit'};
                            `}>
                            {item.link ? (
                              <OutboundLink href={item.link} target="_blank">
                                {item.name}
                              </OutboundLink>
                            ) : (
                              item.name
                            )}
                          </span>
                          {item.description ? (
                            <div
                              className="mb-3"
                              css={css`
                                line-height: 1.5;
                                margin-left: 2.3rem;
                              `}>
                              {item.description}
                            </div>
                          ) : (
                            ''
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          />
        </div>
      </Wrap>
    )
  }
}
