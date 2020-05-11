/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { Colors } from '../styles/main'
import { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import PageBg from '../assets/images/bgs/work.svg'

export default class WorkSinglePage extends Component {
  splitTitle = (title) => {
    const spaceIndex = title.indexOf(' ')
    if (spaceIndex === -1) return <span>{title}</span>
    const partOne = title.slice(0, spaceIndex).trim()
    const partTwo = title.slice(spaceIndex + 1, title.length).trim()

    return (
      <span>
        {partOne} <span className="high">{partTwo}</span>
      </span>
    )
  }

  getCover = (htmlObj) => {
    const findAllByKey = (obj, keyToFind) => {
      return Object.entries(obj).reduce(
        (acc, [key, value]) =>
          key === keyToFind
            ? acc.concat(value)
            : typeof value === 'object'
            ? acc.concat(findAllByKey(value, keyToFind))
            : acc,
        []
      )
    }
    const images = findAllByKey(htmlObj, 'src')
    if (images.length) return images[0]
    return
  }

  render = () => {
    const { slug } = this.props.pageContext
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    title
                    subTitle
                    tags
                    url
                    thumbnail
                  }
                  htmlAst
                  excerpt
                  fields {
                    slug
                  }
                  html
                }
              }
            }
          }
        `}
        render={({ allMarkdownRemark }) => {
          const data = allMarkdownRemark.edges
            .map((item) => {
              const workItem = item.node.frontmatter
              workItem.slug = item.node.fields.slug
              workItem.excerpt = item.node.excerpt
              workItem.htmlAst = item.node.htmlAst
              workItem.html = item.node.html
              return workItem
            })
            .find((item) => item.slug === slug)
          return (
            <Wrap
              lightsOn
              isWorkPage
              pageBg={<PageBg />}
              cover={this.getCover(data.htmlAst)}
              title={`${data.title} - Work - Chandu J S`}
              description={data.excerpt}>
              <div className="content-wrap">
                <div className="mb-5">
                  <div className="h1 font-weight-bold text-body">
                    {this.splitTitle(data.title)}
                  </div>
                  <div
                    className="h5 mb-4"
                    css={css`
                      line-height: 1.3;
                    `}>
                    {data.subTitle}
                  </div>
                  <div className="tags">
                    {data.tags.map((tag) => (
                      <span className="badge badge-pill badge-brand mb-2 mr-2 ng-star-inserted py-1">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  css={css`
                    .gatsby-resp-image-wrapper {
                      margin-top: 2rem;
                      margin-left: -3rem !important;
                      margin-right: -3rem !important;
                      margin-bottom: 2rem;
                      width: calc(100% + 6rem);

                      @media screen and (max-width: 766px) {
                        width: calc(100% + 5rem) !important;
                        margin-left: -2rem !important;
                        margin-right: -2rem !important;
                      }
                    }
                    > p:first-child .gatsby-resp-image-wrapper {
                      margin-top: -3rem;
                      margin-bottom: 2rem;
                      width: 1000px;
                      max-width: calc(100% + 6rem) !important;
                    }
                    > p:last-child .gatsby-resp-image-wrapper {
                      margin-bottom: -4rem;
                    }

                    ul {
                      padding-left: 1.25rem;
                    }

                    a {
                      font-weight: bold;
                      color: ${Colors.brand};
                    }

                    iframe {
                      border: none;
                      background-color: #eee;
                      width: 100%;
                      margin-top: 1rem;
                      border-radius: 3px;
                    }
                  `}
                  className="bg-white pad-wrap rounded-lg overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: data.html }}></div>
                {data.url ? (
                  <OutboundLink
                    eventLabel={`Project Visit (${data.title})`}
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt={data.title}
                    css={css`
                      padding: 1rem 2rem;
                      border-radius: 5px;
                      background-color: ${Colors.accent};
                      color: #212529;
                      font-weight: bold;
                      text-transform: uppercase;
                      margin-top: 3rem;
                      display: inline-block;
                      transition-duration: 0.2s;
                      box-shadow: transparent 0 0 0px;
                      &:hover {
                        box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 2px inset;
                      }
                    `}>
                    GoTo Project
                  </OutboundLink>
                ) : (
                  ''
                )}
              </div>
            </Wrap>
          )
        }}
      />
    )
  }
}
