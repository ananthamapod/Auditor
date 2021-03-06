// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {greeting : 'Hello', other : 'Goodbye'}
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState((prevState) => ({greeting : prevState.other, other : prevState.greeting}))
  }

  render() {
    return (
      <div className="row">
        <h1 className="col-6">
          {this.state.greeting}
        </h1>
        <span className="heart" onClick={this.toggle}/>
      </div>
    )
  }
}

export default Header
