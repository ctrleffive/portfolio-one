import Wrap from '../layouts/wrap'
import React, { Component } from 'react'

import pageBg from '../assets/images/bgs/blog.svg'

export default class BlogPage extends Component {
  render = () => {
    return (
      <Wrap pageBg={pageBg} seoTitle="Blog of Chandu | Chandu J S">
        <div class="content-wrap">
          <div class="h1 font-weight-bold mb-5">
            My <span class="high">Blog</span>
            <span class="blinker">.</span>
            <br />
          </div>
        </div>
      </Wrap>
    )
  }
}
