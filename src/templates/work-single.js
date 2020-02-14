/** @jsx jsx */

import { jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { Component } from 'react'

import PageBg from '../assets/images/bgs/works.svg'

export default class WorkSinglePage extends Component {
  splitTitle = title => {
    const spaceIndex = title.indexOf(' ')
    const partOne = title.slice(0, spaceIndex).trim()
    const partTwo = title.slice(spaceIndex + 1, title.length).trim()

    return (
      <span>
        {partOne} <span className="high">{partTwo}</span>
      </span>
    )
  }

  render = () => {
    const data = this.props.pageContext.dataItem

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
            {this.splitTitle(data.frontmatter.title)}
            <span className="blinker">.</span>
            <br />
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
        </div>
      </Wrap>
    )
  }
}
