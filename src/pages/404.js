import Wrap from '../layouts/wrap'
import React, { Component } from 'react'

export default class UsesPage extends Component {
  render = () => {
    return (
      <Wrap seoTitle="404 | Page Not Found | Chandu J S">
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
