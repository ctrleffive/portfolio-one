import Wrap from '../layouts/wrap'
import React, { Component } from 'react'

export default class UsesPage extends Component {
  render = () => {
    return (
      <Wrap title="404 - Page Not Found" description="Page Not Found">
        <div className="content-wrap">
          <div className="h1 font-weight-bold mb-3">
            Page <span className="high">Not</span> Found 😕
            <span className="blinker">.</span>
            <br />
          </div>
          <div className="h5 mb-4 pb-4">
            Please let me know if you think this is an error.
          </div>
        </div>
      </Wrap>
    )
  }
}
