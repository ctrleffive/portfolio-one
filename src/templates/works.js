/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { Link } from 'gatsby'
import { Component } from 'react'

import { Colors } from '../styles/main'

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
          <div className="all-works">
            {data.map(item => (
              <Link
                to={`/works${item.fields.slug}`}
                className="overflow-hidden"
                css={css`
                  padding: 2rem;
                  display: inline-block;
                  position: relative;
                  z-index: 0;
                  background-color: ${Colors.brand};
                  &:before,
                  &:after {
                    content: '';
                    position: absolute;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                  }
                  &:before {
                    background-image: url(${item.thumbnail.fixed.base64});
                    left: -1rem;
                    right: -1rem;
                    top: -1rem;
                    bottom: -1rem;
                    filter: blur(1rem);
                    z-index: -1;
                  }
                  &:after {
                    background-image: url(${item.thumbnail.fluid.src});
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    z-index: 0;
                  }
                  &:hover {
                    .item-details {
                      bottom: 1.6rem;
                    }
                    .item-tagline {
                      opacity: 1;
                    }
                    &:after {
                      opacity: 0;
                    }
                    &:before {
                      opacity: 0.5;
                    }
                  }
                `}>
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
                    {['design', 'photo', 'code'].map(tag => (
                      <span
                        css={css`
                          color: #fff;
                          margin-right: 2rem;
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
                    Tagline goes here..
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Wrap>
    )
  }
}
