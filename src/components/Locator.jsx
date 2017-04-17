import React, { Component } from 'react'

class Locator extends Component {
  constructor(props) {
    super(props)
  }

  locate(e) {
    e.preventDefault()
    if ("geolocation" in window.navigator) {
      window.navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude
        let lng = position.coords.longitude
        window.map.setCenter({lat: lat, lng: lng})
      })
    }
  }

  render() {
    return (
      <span className="text-input-button" onClick={this.locate}>
        <i className="glyphicon fa-fw fa-pulse fa-bullseye"/>
      </span>
    )
  }
}

export default Locator
