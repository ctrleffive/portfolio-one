import Wrap from '../layouts/wrap'
import React, { Component } from 'react'

import PageBg from '../assets/images/bgs/works.svg'

export default class WorksPage extends Component {
  render = () => {
    return (
      <Wrap pageBg={<PageBg />} seoTitle="Works of Chandu | Chandu J S">
        <div className="content-wrap">
          <div className="h1 font-weight-bold mb-5">
            My <span className="high">Works</span>
            <span className="blinker">.</span>
            <br />
          </div>
        </div>
      </Wrap>
    )
  }
}
