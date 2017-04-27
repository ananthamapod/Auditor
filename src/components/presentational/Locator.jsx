import React, { Component } from 'react'

class Locator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span className="text-input-button" onClick={this.props.locate}>
        <i className="glyphicon fa-fw fa-pulse fa-bullseye"/>
      </span>
    )
  }
}

export default Locator
