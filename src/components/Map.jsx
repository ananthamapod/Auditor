import React, { Component } from 'react'

class Map extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let lat = 0
    let lng = 0
    if ("geolocation" in window.navigator) {
      window.navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude
        lng = position.coords.longitude
        window.map.setCenter({lat: lat, lng: lng})
      })
    }
    window.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: lat, lng: lng},
      scrollwheel: false,
      zoom: 5
    })
  }

  render() {
    return  (
      <div>
        <div id="map" />
      </div>
    )
  }
}

export default Map
