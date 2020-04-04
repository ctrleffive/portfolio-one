/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { Colors } from '../styles/main'
import { Component } from 'react'

import PageBg from '../assets/images/bgs/work.svg'

export default class WorkSinglePage extends Component {
  splitTitle = title => {
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

  render = () => {
    const data = this.props.pageContext.dataItem

    return (
      <Wrap
        lightsOn
        isWorkPage
        pageBg={<PageBg />}
        title={`${data.frontmatter.title} | Work | Chandu J S`}
        description="My work">
        <div className="content-wrap">
          <div className="mb-5">
            <div className="h1 font-weight-bold text-body">
              {this.splitTitle(data.frontmatter.title)}
            </div>
            <div
              className="h5 mb-4"
              css={css`
                line-height: 1.3;
              `}>
              {data.frontmatter.subTitle}
            </div>
            <div className="tags">
              {data.frontmatter.tags.map(tag => (
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
            `}
            className="bg-white pad-wrap rounded-lg overflow-hidden"
            dangerouslySetInnerHTML={{ __html: data.html }}></div>
          {data.frontmatter.url ? (
            <a
              href={data.frontmatter.url}
              target="_blank"
              rel="noopener noreferrer"
              alt={data.frontmatter.title}
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
            </a>
          ) : (
            ''
          )}
        </div>
      </Wrap>
    )
  }
}
