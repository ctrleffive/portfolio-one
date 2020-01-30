import Wrap from '../layouts/wrap'
import React, { Component } from 'react'

import pageBg from '../assets/images/bgs/works.svg'

export default class WorksPage extends Component {
  render = () => {
    return (
      <Wrap pageBg={pageBg}>
        <div class="content-wrap">
          <div class="h1 font-weight-bold mb-5">
            My <span class="high">Works</span>
            <span class="blinker">.</span>
            <br />
          </div>
        </div>
      </Wrap>
    )
  }
}
