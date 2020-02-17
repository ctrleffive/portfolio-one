/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { Component } from 'react'

import PageBg from '../assets/images/bgs/blog.svg'

import { Link } from 'gatsby'

export default class BlogPage extends Component {
  render = () => {
    return (
      <Wrap
        lightsOn
        pageBg={<PageBg />}
        seoTitle="Blog of Chandu | Chandu J S"
        seoDescription="I write development articles in Dev.to"
        seoKeywords="blog, ctrleffive, dev.to">
        <div className="content-wrap">
          <div className="h1 font-weight-bold mb-3">
            My <span className="high">Blog</span>
            <span className="blinker">.</span>
            <br />
          </div>
          <div
            className="h5 mb-4 pb-4"
            css={css`
              line-height: 1.6;
            `}>
            I like writing but as you can tell, I suck at posting consistently.
            <br />
            But since you're here now, I'll try to post more in here.
          </div>
          <div className="all-blogs">
            {this.props.pageContext.blogList.map((item, index) => (
              <Link
                to={`/blog/${item.slug}`}
                css={css`
                  padding: 2rem;
                  display: table;
                  max-width: 100%;
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
                    <span
                      css={css`
                        display: inline-block;
                      `}
                      className="mr-3">
                      #{tag}
                    </span>
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
