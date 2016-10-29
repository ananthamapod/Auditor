import React, { Component } from 'react'

class Map extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let lat = 0
    let lng = 0
    let xhr = new XMLHttpRequest()
    xhr.addEventListener("load", function() {
      let data = JSON.parse(xhr.responseText)
      console.log(data)
      lat = data.location.latitude
      lng = data.location.longitude
      window.map.setCenter({lat: lat, lng: lng})
    })
    xhr.open("GET", "http://geoip.nekudo.com/api/")
    xhr.send()
    window.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: lat, lng: lng},
      scrollwheel: false,
      zoom: 12
    })
  }

  render() {
    return  (
      <div id="map" />
    )
  }
}

export default Map
