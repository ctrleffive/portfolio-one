/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { Component } from 'react'

import PageBg from '../assets/images/bgs/blog.svg'

import { Link } from 'gatsby'

export default class BlogPage extends Component {
  render = () => {
    return (
      <Wrap lightsOn pageBg={<PageBg />} seoTitle="Blog of Chandu | Chandu J S">
        <div className="content-wrap">
          <div className="h1 font-weight-bold mb-5">
            My <span className="high">Blog</span>
            <span className="blinker">.</span>
            <br />
          </div>
          <div className="all-blogs">
            {this.props.pageContext.blogList.map((item, index) => (
              <Link
                to={`/blog/${item.slug}`}
                css={css`
                  padding: 2rem;
                  display: block;
                `}
                className="mb-4 rounded-lg bg-white overflow-hidden">
                <div
                  className={`${
                    index === 0 ? 'h2' : 'h4'
                  } item-title font-weight-bold brand-light`}>
                  {item.title}
                </div>
                <div className="{font-weight-bold text-muted item-date}">
                  {item.readable_publish_date}
                </div>
                <div className="item-tags text-lowercase mt-2">
                  {item.tags.map(tag => (
                    <span className="mr-3">#{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Wrap>
    )
  }
}
