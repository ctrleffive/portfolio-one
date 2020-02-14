/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Component } from 'react'

import PageBg from '../assets/images/bgs/works.svg'

export default class WorksPage extends Component {
  render = () => {
    const data = this.props.pageContext.worksList

    return (
      <Wrap
        lightsOn
        isWorksPage
        pageBg={<PageBg />}
        seoTitle="Works of Chandu | Chandu J S"
        seoDescription="My works"
        seoKeywords="works, ctrleffive, portfolio">
        <div className="content-wrap">
          <div className="h1 font-weight-bold mb-5">
            My <span className="high">Works</span>
            <span className="blinker">.</span>
            <br />
          </div>
          <div className="row">
            {data.map(item => {
              return (
                <StaticQuery
                  query={graphql`
                    query {
                      allFile(filter: { extension: { eq: "jpg" } }) {
                        edges {
                          node {
                            name
                            relativeDirectory
                            childImageSharp {
                              fixed(width: 500, height: 300) {
                                ...GatsbyImageSharpFixed
                              }
                            }
                            colors {
                              ...GatsbyImageColors
                            }
                          }
                        }
                      }
                    }
                  `}
                  render={({ allFile }) => {
                    const findNode = () => {
                      return allFile.edges.find(edge => {
                        return (
                          edge.node.relativeDirectory === item.fields.slug &&
                          edge.node.name === 'thumbnail'
                        )
                      }).node
                    }
                    return (
                      <div className="col-xl-4 col-md-6 mb-4">
                        <Link
                          to={`/works/${item.fields.slug}`}
                          className="overflow-hidden rounded-lg"
                          css={css`
                            display: inline-block;
                            position: relative;
                            z-index: 0;
                            height: 300px;
                            width: 100%;
                            &:before {
                              content: '';
                              position: absolute;
                              top: 0;
                              left: 0;
                              right: 0;
                              bottom: 0;
                              background-color: ${findNode().colors
                                .darkVibrant};
                              z-index: 1;
                              transition-duration: 0.2s;
                              opacity: 0;
                            }
                            &:hover {
                              &:before {
                                opacity: 0.95;
                              }
                              .item-details {
                                bottom: 1.6rem;
                              }
                              .item-tagline {
                                opacity: 1;
                              }
                            }
                          `}>
                          <Img fixed={findNode().childImageSharp.fixed} />
                          <div
                            css={css`
                              position: absolute;
                              z-index: 1;
                              mix-blend-mode: color-dodge;
                              bottom: -1rem;
                              left: 2rem;
                              transition-duration: 0.2s;
                            `}
                            className="item-details">
                            <div
                              css={css`
                                font-weight: bold;
                                font-size: 2rem;
                                color: #969696;
                                margin-bottom: 0rem;
                              `}>
                              {item.frontmatter.title}
                            </div>
                            <div>
                              {item.frontmatter.tags.map(tag => (
                                <span
                                  css={css`
                                    color: #fff;
                                    margin-right: 1.5rem;
                                  `}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div
                              css={css`
                                color: rgba(255, 255, 255, 0.7);
                                margin-top: 1rem;
                                transition-duration: 0.2s;
                                opacity: 0;
                              `}
                              className="item-tagline">
                              {item.frontmatter.subTitle}
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                  }}
                />
              )
            })}
          </div>
        </div>
      </Wrap>
    )
  }
}
