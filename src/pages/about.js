/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import { Component } from 'react'

import pageBg from '../assets/images/bgs/about.svg'

import Wrap from '../layouts/wrap'

export default class AboutPage extends Component {
  render = () => {
    return (
      <Wrap pageBg={pageBg}>
        <div className="content-wrap">
          <div className="h1 font-weight-bold mb-5">
            Hi.
            <br />
            I'm <span className="high">Chandu J S</span>
            <span className="blinker">.</span>
            <br />A <span className="high">full stack developer</span>
            <br /> based in
            <span className="brand-light"> Trivandrum, India</span>.<br />
            Currently living in <span className="high">Seychelles</span>
          </div>
          <div className="brand-light h3">
            Interested in
            <br />
            working together?
            <br />
            Feel free to contact me
            <br /> for any project or collaboration.
          </div>
          <div className="mt-5 h5">
            My skillset and interests includes:
            <div
              className="font-weight-bold mt-3"
              css={css`
                line-height: 2rem;
                width: 50%;
                position: relative;
                left: -0.5rem;

                @media screen and (max-width: 1000px) {
                  width: 75%;
                }
                @media screen and (max-width: 500px) {
                  width: 100%;
                }

                span {
                  display: inline-block;
                  margin-left: 0.5rem;
                }
              `}>
              <span className="high">JavaScript</span>,
              <span className="high">Dart & Flutter</span>,
              <span className="high">CSS3</span>,
              <span className="high">HTML5</span>,
              <span className="high">Electron</span>,
              <span className="high">MongoDB</span>,
              <span className="high">Mobile & Responsive Design</span>,
              <span className="high">Node.js</span>,
              <span className="high">Firebase</span>,
              <span className="high">WebRTC, WebSockets</span>,
              <span className="high">PHP</span>,
              <span className="high">Twitter</span>,
              <span className="high">MySQL</span>,
              <span className="high">React</span>,
              <span className="high">Angular</span>,
              <span className="high">Gatsby</span>,
              <span className="high">GraphQL</span>,
              <span className="high">Express</span>,
              <span className="high">Gulp</span>,
              <span className="high">WordPress</span>,
              <span className="high">jQuery</span>,
              <span className="high">Bootstrap</span>,
              <span className="high">Photography</span>,
              <span className="high">Google Maps</span>..
            </div>
          </div>
          <br />
          <div
            css={css`
              .contact-item-label {
                width: 150px;
                display: inline-block;
              }
            `}
            className="h5 mt-5">
            <div className="mt-5">
              <span className="contact-item-label font-weight-bold brand-light">
                email
              </span>
              <a href="mailto:hello@chandujs.dev">hello@chandujs.dev</a>
            </div>
            <div className="mt-3">
              <span className="contact-item-label font-weight-bold brand-light">
                telegram
              </span>
              <a href="https://t.me/ctrleffive" target="_blank">
                @ctrleffive
              </a>
            </div>
          </div>
        </div>
      </Wrap>
    )
  }
}
