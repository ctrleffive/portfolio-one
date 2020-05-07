/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { Component } from 'react'

export default class WorkThumbnail extends Component {
  render = () => {
    const data = this.props.data
    return (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter: { relativeDirectory: { eq: "uploads" } }) {
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
          if (typeof data.thumbnail === 'string') {
            const thumbnail = allFile.edges.find((item) => {
              return data.thumbnail.includes(item.node.relativePath)
            }).node
            data.thumbnail = thumbnail
          }
          return (
            <div
              className="col-xl-4 col-md-6"
              css={css`
                margin-bottom: 1.4rem;
                @media screen and (max-width: 766px) {
                  margin-bottom: 0.8rem;
                }
              `}>
              <Link
                to={`/work/${data.slug}`}
                className="overflow-hidden"
                css={css`
                  display: inline-block;
                  position: relative;
                  z-index: 0;
                  height: 300px;
                  width: 100%;
                  border-radius: 5px;
                  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 2px;
                  &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: ${data.thumbnail.colors.lightVibrant};
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
                  fixed={data.thumbnail.childImageSharp.fixed}
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
                    color: ${data.thumbnail.colors.muted};

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
                    {data.title}
                  </div>
                  <div>
                    {data.tags.map((tag) => (
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
                    {data.subTitle}
                  </div>
                </div>
              </Link>
            </div>
          )
        }}
      />
    )
  }
}
