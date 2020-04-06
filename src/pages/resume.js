/** @jsx jsx */

import { Component } from 'react'
import { StaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { css, jsx } from '@emotion/core'

export default class ResumePage extends Component {
  render = () => {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                person {
                  name {
                    first
                    last
                  }
                }
                siteURL
                social {
                  icon
                  service
                  url
                }
                skills
              }
            }
          }
        `}
        render={({ site }) => {
          const data = site.siteMetadata
          return (
            <div css={css``}>
              <Helmet
                base="/"
                defaultTitle={'Resume of ' + data.person.name.first}>
                <html lang="en" />
              </Helmet>
            </div>
          )
        }}
      />
    )
  }
}
