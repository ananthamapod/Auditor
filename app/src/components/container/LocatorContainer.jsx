import { connect } from 'react-redux'
import { mapRecenter } from '../../actions/actionCreators'
import Locator from '../presentational/Locator.jsx'


const locate = (e, dispatch) => {
  e.preventDefault()
  if ("geolocation" in window.navigator) {
    window.navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude
      let lng = position.coords.longitude
      window.map.panTo({lat: lat, lng: lng})
      dispatch(mapRecenter({lat: lat, lng: lng}))
    })
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.mapCenter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    locate: (e) => {
      locate(e, dispatch)
    }
  }
}

const LocatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Locator)

export default LocatorContainer
