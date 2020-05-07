/** @jsx jsx */

import { StaticQuery, graphql } from 'gatsby'
import { css, jsx } from '@emotion/core'
import { Component } from 'react'
import Wrap from '../layouts/wrap'
import { ColorsAdvanced, Colors } from '../styles/main'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import PageBg from '../assets/images/bgs/uses.svg'

export default class UsesPage extends Component {
  render = () => {
    return (
      <Wrap
        pageBg={<PageBg />}
        title="Uses - Chandu J S"
        description="Stuff I use in a daily basis.">
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
              line-height: 1.6;
            `}>
            Curious to know what gear I use on a daily basis? <br />
            My setup changes from time to time. Will try to keep this page
            updated.
            <span
              css={css`
                margin-left: 5px;
              `}
              role="img"
              aria-label="smile">
              😁
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
                {site.siteMetadata.uses.map((section) => (
                  <div className="col-lg-4 col-md-6 mb-4 mt-1">
                    <div className="h3 mb-2">{section.title}</div>
                    <p className={section.description ? `mb-4` : `pb-0`}>
                      {section.description}
                    </p>
                    <ul className="no-bullets">
                      {section.items.map((item) => (
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
                              <OutboundLink
                                eventLabel={`Uses (${item.name})`}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer">
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
