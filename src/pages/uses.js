import Wrap from '../layouts/wrap'
import React, { Component } from 'react'

import pageBg from '../assets/images/bgs/uses.svg'

export default class UsesPage extends Component {
  render = () => {
    return (
      <Wrap pageBg={pageBg} seoTitle="Uses | Chandu J S">
        <div className="content-wrap">
          <div className="h1 font-weight-bold mb-5">
            <span className="high">Uses</span>
            <span className="blinker">.</span>
            <br />
          </div>
        </div>
      </Wrap>
    )
  }
}
