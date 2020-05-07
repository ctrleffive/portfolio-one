/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import { Component } from 'react'
import { Colors } from '../styles/main'

import PageBg from '../assets/images/bgs/about.svg'

import Wrap from '../layouts/wrap'
import { StaticQuery, graphql, Link } from 'gatsby'

export default class AboutPage extends Component {
  render = () => {
    return (
      <Wrap
        pageBg={<PageBg />}
        title="About - Chandu J S"
        description="I'm Chandu J S. I'm a full stack developer based in Trivandrum, India.">
        <div className="content-wrap">
          <div className="h1 font-weight-bold mb-5">
            Hi.
            <br />
            I'm <span className="high">Chandu J S</span>
            <span className="blinker">.</span>
            <br />A <span className="high">full stack developer</span>
            <br /> based in
            <span className="brand-light"> Trivandrum, India</span>.
          </div>
          <div className="brand-light h3">
            Interested in
            <br />
            working together?
            <br />
            Feel free to contact me
            <br /> for any project or collaboration.
          </div>
          <Link
            to="/resume"
            alt="My Resume"
            css={css`
              border-radius: 5px;
              background-color: ${Colors.accent};
              color: #212529;
              font-weight: bold;
              text-transform: uppercase;
              display: inline-block;
              padding: 0.8rem 1.3rem;
              height: 2.9rem;
              margin-top: 1.5rem;
              transition-duration: 0.2s;
              box-shadow: transparent 0 0 0px;
              &:hover {
                color: #212529;
                box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 2px inset;
              }
            `}>
            View My Resume
          </Link>
          <div className="mt-5 h5">
            My skillset and interests includes:
            <div
              className="font-weight-bold mt-3"
              css={css`
                line-height: 2rem;
                width: 50%;
                position: relative;
                left: -1rem;

                @media screen and (max-width: 1000px) {
                  width: 75%;
                }
                @media screen and (max-width: 766px) {
                  width: 100%;
                }

                span {
                  display: inline-block;
                  margin-left: 0.5rem;
                }
              `}>
              <StaticQuery
                query={graphql`
                  query {
                    site {
                      siteMetadata {
                        skills
                      }
                    }
                  }
                `}
                render={({ site }) =>
                  site.siteMetadata.skills.map((item, index) => (
                    <span>
                      <span className="high">{item}</span>
                      {index + 1 === site.siteMetadata.skills.length
                        ? ' ...'
                        : ', '}
                    </span>
                  ))
                }
              />
            </div>
          </div>
        </div>
      </Wrap>
    )
  }
}
