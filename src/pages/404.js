import Wrap from '../layouts/wrap'
import React, { Component } from 'react'

export default class UsesPage extends Component {
  render = () => {
    return (
      <Wrap
        title="404 | Page Not Found | Chandu J S"
        description="Page Not Found">
        <div className="content-wrap">
          <div className="h1 font-weight-bold mb-5">
            Page <span className="high">Not</span> Found 😕
            <span className="blinker">.</span>
            <br />
          </div>
        </div>
      </Wrap>
    )
  }
}
