/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { StaticQuery, graphql } from 'gatsby'
import { Component } from 'react'

import PageBg from '../assets/images/bgs/work.svg'
import WorkThumbnail from '../components/work-thumbnail'

export default class WorkPage extends Component {
  render = () => {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    sort
                    title
                    subTitle
                    tags
                    thumbnail
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `}
        render={({ allMarkdownRemark }) => {
          const workItems = allMarkdownRemark.edges
            .map((item) => {
              const data = item.node.frontmatter
              data.slug = item.node.fields.slug
              return data
            })
            .sort((a, b) => b.sort - a.sort)
          return (
            <Wrap
              lightsOn
              isWorkPage
              pageBg={<PageBg />}
              title="Work - Chandu J S"
              description="Here is the listing of some of my work.">
              <div className="content-wrap">
                <div className="h1 font-weight-bold mb-3">
                  My <span className="high">Work</span>
                  <span className="blinker">.</span>
                  <br />
                </div>
                <div
                  className="h5 mb-4 pb-4"
                  css={css`
                    line-height: 1.6;
                  `}>
                  I am a lover of anything and everything technology. <br />
                  But when I am not kicking{' '}
                  <span role="img" aria-label="ass">
                    🍑
                  </span>{' '}
                  with my keyboard, I make photos.
                </div>
                <div
                  className="row"
                  css={css`
                    @media screen and (max-width: 766px) {
                      margin-left: -2rem;
                      margin-right: -2rem;
                    }
                  `}>
                  {workItems.map((item) => (
                    <WorkThumbnail data={item} />
                  ))}
                </div>
              </div>
            </Wrap>
          )
        }}
      />
    )
  }
}
