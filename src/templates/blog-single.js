/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { Component } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import codeStyles from '../styles/code.js'

import devIcon from '../../static/images/icons/dev.png'

export default class BlogSinglePage extends Component {
  render = () => {
    const data = this.props.pageContext.blogData

    return (
      <Wrap
        lightsOn
        isBlogPage
        title={`${data.title} | Blog | Chandu J S`}
        description="I write development articles in Dev.to">
        <div className="content-wrap">
          <div className="mb-5">
            <div className="h1 font-weight-bold text-body">{data.title}</div>
            <div className="mb-3">
              Published On: {data.readable_publish_date}
            </div>
            <div className="tags">
              {data.tags.map(tag => (
                <span className="badge badge-pill badge-brand mb-2 mr-2 py-1">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white pad-wrap rounded-lg overflow-hidden">
            {data.cover_image ? (
              <img
                css={css`
                  margin: -3rem -3rem 3rem;
                  max-width: calc(100% - -6rem);
                `}
                src={data.cover_image}
                alt={data.title}
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
  }
}
