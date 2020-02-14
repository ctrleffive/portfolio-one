/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { Component } from 'react'

import codeStyles from '../styles/code.js'

import devIcon from '../assets/images/icons/dev.png'
import { Link } from 'gatsby'

export default class BlogSinglePage extends Component {
  render = () => {
    const data = this.props.pageContext.blogData

    return (
      <Wrap
        lightsOn
        isBlogPage
        seoTitle={`${data.title} | Blog | Chandu J S`}
        seoDescription="I write development articles in Dev.to"
        seoKeywords="blog, ctrleffive, dev.to">
        <div
          className="content-wrap"
          css={css`
            .blog-wrap {
              padding: 3rem;
              transition-duration: 0.3s;
              max-width: 1000px;

              @media screen and (max-width: 500px) {
                margin-left: -3rem;
                margin-right: -3rem;
                border-radius: 0 !important;
                width: calc(100% - -5rem);
              }
              @media print {
                border: 1px solid;
              }
            }
          `}>
          <div className="mb-5">
            <div className="h1 font-weight-bold text-body">{data.title}</div>
            <div className="mb-3">
              Published On: {data.readable_publish_date}
            </div>
            <div className="tags">
              {data.tags.map(tag => (
                <span className="badge badge-pill badge-brand mb-2 mr-2 ng-star-inserted py-1">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white blog-wrap rounded-lg overflow-hidden">
            <img
              css={css`
                margin: -3rem -3rem 3rem;
                max-width: calc(100% - -6rem);
              `}
              src={data.cover_image}
              alt={data.title}
            />
            <div
              css={codeStyles}
              dangerouslySetInnerHTML={{ __html: data.body_html }}
            />
          </div>
          <Link to={data.url} target="_blank" rel="noreferrer">
            <img
              src={devIcon}
              alt="Dev.to"
              css={css`
                filter: invert(1);
                margin-left: -5px;
                margin-top: 1rem;
              `}
            />
          </Link>
        </div>
      </Wrap>
    )
  }
}
