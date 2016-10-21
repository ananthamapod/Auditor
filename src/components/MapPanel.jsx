import React, { Component, PropTypes } from 'react'
import Map from './Map.jsx'
import Header from './Header.jsx'

class MapPanel extends Component {
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
      <div className="col-4 mapPanel">
        <Header />
        <Map />
      </div>
    )
  }
}

export default MapPanel
