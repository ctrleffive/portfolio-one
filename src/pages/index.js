/** @jsx jsx */

import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'
import { Component } from 'react'

import { ColorsAdvanced, Colors } from '../styles/main'

import PageBg from '../assets/images/bgs/home.svg'

import Wrap from '../layouts/wrap'

export default class IndexPage extends Component {
  render = () => {
    return (
      <Wrap
        pageBg={<PageBg />}
        seoDescription="Welcome to my website"
        seoKeywords="home, ctrleffive, website">
        <div
          css={css`
            top: 47%;
            left: 25%;
            z-index: 3;
            position: absolute;
            transform: translate(-50%, -50%);

            @media print {
              display: none;
            }
            @media screen and (max-width: 1000px) {
              left: 50%;
            }
            @media screen and (max-width: 766px) {
              left: initial;
              width: initial;
              top: initial;
              bottom: initial;
              position: absolute;
              margin: 8rem 2rem 0;
              transform: initial;
            }
          `}
          className="welcome-wrap">
          <div className="h1 m-0 font-weight-bold text-left">
            <div className="text-break">
              I'm <span className="high">a</span>
            </div>
            <div className="text-break">
              full stack <span className="high">developer</span>
              <span className="blinker">.</span>
            </div>
          </div>
          <Link
            to="/works"
            className="mt-4"
            css={css`
              display: inline-block;
              transition-duration: 0.2s;
              cursor: pointer;
              top: 0px;
              padding: 0.5rem 1.3rem;
              border-width: 0;
              border-style: solid;
              border-image: initial;
              border-radius: 2rem;
              font-weight: bold;
              text-transform: uppercase;
              font-size: 0.8rem;
              background-color: ${Colors.brand};
              color: #fff;
              .lights-on & {
                background-color: ${Colors.accent};
                color: ${ColorsAdvanced.main};
              }
              &:hover {
                background-color: ${Colors.accent};
                color: ${ColorsAdvanced.main};
                .lights-on & {
                  background-color: ${Colors.brand};
                  color: #fff;
                }
              }
            `}>
            GoTo Works
          </Link>
        </div>
      </Wrap>
    )
  }
}
