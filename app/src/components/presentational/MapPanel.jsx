// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import Map from './Map.jsx'

class MapPanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-4 mapPanel">
        <Map />
      </div>
    )
  }
}

export default MapPanel
