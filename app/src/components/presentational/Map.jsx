// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import requests from 'superagent'

class Map extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let lat = 0
    let lng = 0
    requests.get("http://geoip.nekudo.com/api/").end(function(err, res) {
      // eslint-disable-next-line no-console
      if (err) console.log(err)
      else {
        let data = JSON.parse(res.text)
        lat = data.location.latitude
        lng = data.location.longitude
        window.map.panTo({lat: lat, lng: lng})
      }
    })
    window.map = new window.google.maps.Map(document.getElementById('map'), {
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
