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
            top: 50%;
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
            @media screen and (max-width: 500px) {
              left: initial;
              width: initial;
              top: initial;
              bottom: initial;
              position: absolute;
              margin: 8rem 2rem 0;
              transform: initial;
              margin-top: 7rem;
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
              padding: 1rem;
              display: block;
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 100%;
              transition-duration: 0.2s;
              cursor: pointer;
              width: 3rem;
              height: 3rem;
              position: relative;
              top: 0;
              &:before {
                content: '';
                border: 2px solid ${Colors.accent};
                width: 0.7rem;
                height: 0.7rem;
                display: block;
                border-left: 0;
                border-top: 0;
                position: absolute;
                top: 46%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(45deg);
              }
              .lights-on & {
                border-color: rgba(0, 0, 0, 0.1);
                &:before {
                  border-color: ${ColorsAdvanced.accentLightsOn};
                }
              }
              &:hover {
                top: 0.5rem;
              }
            `}></Link>
        </div>
      </Wrap>
    )
  }
}
