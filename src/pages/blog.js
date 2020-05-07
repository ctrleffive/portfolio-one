/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { Component } from 'react'

import PageBg from '../assets/images/bgs/blog.svg'

import { StaticQuery, Link, graphql } from 'gatsby'

export default class BlogPage extends Component {
  render = () => {
    return (
      <StaticQuery
        query={graphql`
          query {
            allDevArticles {
              edges {
                node {
                  article {
                    title
                    tags
                    readable_publish_date
                    slug
                  }
                }
              }
            }
          }
        `}
        render={({ allDevArticles }) => {
          const articles = allDevArticles.edges.map((item) => item.node.article)
          return (
            <Wrap
              lightsOn
              pageBg={<PageBg />}
              title="Blog - Chandu J S"
              description="I write development tips & articles often.">
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
                  I like writing but as you can tell, I suck at posting
                  consistently.
                  <br />
                  But since you're here now, I'll try to post more in here.
                </div>
                <div
                  className="all-blogs"
                  css={css`
                    margin-right: -1.9rem;

                    @media screen and (max-width: 766px) {
                      margin: 0 -2rem;
                    }
                  `}>
                  {articles.map((item) => (
                    <Link
                      to={`/blog/${item.slug}`}
                      css={css`
                        padding: 2rem;
                        display: inline-block;
                        margin-right: 1.9rem;
                        max-width: 100%;
                        border-radius: 0.3rem;

                        @media screen and (max-width: 766px) {
                          margin: 0;
                          border-radius: 0;
                          display: block;
                        }
                      `}
                      className="mb-4 bg-white overflow-hidden">
                      <div
                        css={css`
                          line-height: 2rem;
                        `}
                        className="item-title font-weight-bold brand-light h4">
                        {item.title}
                      </div>
                      <div className="mb-3 text-muted item-date">
                        Published On:{' '}
                        <strong>{item.readable_publish_date}</strong>
                      </div>
                      <div className="item-tags text-lowercase mt-2">
                        {item.tags.map((tag) => (
                          <span
                            css={css`
                              display: inline-block;
                            `}
                            className="badge badge-pill badge-brand mr-3">
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
        }}
      />
    )
  }
}
