import React, { Component, PropTypes } from 'react'

class SearchPanel extends Component {
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
      <div className="col-4 searchPanel">
        <h1 className="col-6">
          {this.state.greeting}
        </h1>
        <span className="heart" onClick={this.toggle}/>
      </div>
    )
  }
}

export default SearchPanel
