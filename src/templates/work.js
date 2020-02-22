/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { Component } from 'react'

import PageBg from '../assets/images/bgs/work.svg'

export default class WorkPage extends Component {
  render = () => {
    const data = this.props.pageContext.workList

    return (
      <Wrap
        lightsOn
        isWorkPage
        pageBg={<PageBg />}
        seoTitle="Work of Chandu | Chandu J S"
        seoDescription="My work"
        seoKeywords="work, ctrleffive, portfolio">
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
            className="row no-gutters"
            css={css`
              @media screen and (max-width: 766px) {
                margin-left: -2rem;
                margin-right: -2rem;
              }
            `}>
            {data.map(item => {
              return (
                <StaticQuery
                  query={graphql`
                    query {
                      allFile(
                        filter: { relativeDirectory: { eq: "uploads" } }
                      ) {
                        edges {
                          node {
                            relativePath
                            childImageSharp {
                              fixed(width: 500, height: 300, quality: 100) {
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
                          item.frontmatter.thumbnail ===
                          `content/${edge.node.relativePath}`
                        )
                      }).node
                    }
                    return (
                      <div
                        className="col-xl-4 col-md-6"
                        css={css`
                          margin-bottom: -7px;
                        `}>
                        <Link
                          to={`/work/${item.fields.slug}`}
                          className="overflow-hidden"
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
                                .lightVibrant};
                              z-index: 1;
                              transition-duration: 0.2s;
                              opacity: 0;

                              @media screen and (max-width: 766px) {
                                opacity: 0.9;
                              }
                            }
                            &:hover {
                              &:before {
                                opacity: 0.95;
                              }
                              .item-details {
                                opacity: 1;
                                bottom: -0.6rem;
                              }
                            }
                            .gatsby-image-wrapper {
                              width: 100% !important;
                            }
                          `}>
                          <Img
                            fixed={findNode().childImageSharp.fixed}
                            objectFit="cover"
                            objectPosition="50% 50%"
                          />
                          <div
                            css={css`
                              position: absolute;
                              z-index: 1;
                              mix-blend-mode: difference;
                              bottom: -3rem;
                              right: 0;
                              left: 0;
                              opacity: 0;
                              padding-top: 10rem;
                              padding-left: 2rem;
                              padding-bottom: 2.2rem;
                              transition-duration: 0.2s;
                              color: ${findNode().colors.muted};

                              @media screen and (max-width: 766px) {
                                opacity: 1;
                                bottom: -0.6rem;
                              }
                            `}
                            className="item-details">
                            <div
                              css={css`
                                font-weight: bold;
                                font-size: 2rem;
                                margin-bottom: 0rem;
                              `}>
                              {item.frontmatter.title}
                            </div>
                            <div>
                              {item.frontmatter.tags.map(tag => (
                                <span
                                  css={css`
                                    margin-right: 1.5rem;
                                  `}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div
                              css={css`
                                margin-top: 1rem;
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
