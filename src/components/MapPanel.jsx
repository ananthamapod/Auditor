import React, { Component, PropTypes } from 'react'
import Map from './Map.jsx'
import Header from './Header.jsx'

class MapPanel extends Component {
  constructor(props) {
    super(props)
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
