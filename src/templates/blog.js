/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Img from 'gatsby-image/withIEPolyfill'

import codeStyles from '../styles/code.js'

import devIcon from '../../static/images/icons/dev.png'

export default class BlogSinglePage extends Component {
  render = () => {
    const { slug } = this.props.pageContext
    return (
      <StaticQuery
        query={graphql`
          query {
            allDevArticles {
              edges {
                node {
                  article {
                    title
                    slug
                    description
                    tags
                    readable_publish_date
                    body_html
                    url
                  }
                  cover_image {
                    childImageSharp {
                      fixed(width: 1000, quality: 100) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allDevArticles }) => {
          const data = allDevArticles.edges
            .map((item) => {
              item.node.article.cover_image = item.node.cover_image
              return item.node.article
            })
            .find((item) => item.slug === slug)
          return (
            <Wrap
              lightsOn
              isBlogPage
              title={`${data.title} - Blog - Chandu J S`}
              cover={data.cover_image?.childImageSharp.fixed.src}
              description={data.description}>
              <div className="content-wrap">
                <div className="mb-5">
                  <div className="h1 font-weight-bold text-body">
                    {data.title}
                  </div>
                  <div className="mb-3">
                    Published On: {data.readable_publish_date}
                  </div>
                  <div className="tags">
                    {data.tags.map((tag) => (
                      <span className="badge badge-pill badge-brand mb-2 mr-2 py-1">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white pad-wrap rounded-lg overflow-hidden">
                  {data.cover_image ? (
                    <Img
                      css={css`
                        margin: -3rem -3rem 3rem;
                        max-width: calc(100% - -6rem);
                      `}
                      fixed={data.cover_image.childImageSharp.fixed}
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                  ) : (
                    ''
                  )}
                  <div
                    css={codeStyles}
                    dangerouslySetInnerHTML={{ __html: data.body_html }}
                  />
                </div>
                <OutboundLink
                  eventLabel="DEV Blog Visit"
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={devIcon}
                    alt="Dev.to"
                    css={css`
                      filter: invert(1);
                      margin-left: -5px;
                      margin-top: 1rem;
                    `}
                  />
                </OutboundLink>
              </div>
            </Wrap>
          )
        }}
      />
    )
  }
}
