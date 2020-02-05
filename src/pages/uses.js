import Wrap from '../layouts/wrap'
import React, { Component } from 'react'

import PageBg from '../assets/images/bgs/uses.svg'

export default class UsesPage extends Component {
  render = () => {
    return (
      <Wrap pageBg={<PageBg />} seoTitle="Uses | Chandu J S">
        <div className="content-wrap">
          <div className="h1 font-weight-bold mb-3">
            <span className="high">Uses</span>
            <span className="blinker">.</span>
            <br />
          </div>
          <div className="h5">
            Curious to know what I use on a daily basis? Just check it out here
            😃
          </div>
        </div>
      </Wrap>
    )
  }
}
