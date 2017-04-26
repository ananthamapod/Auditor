import { MAP_RECENTER } from '../actions/actionTypes'

function mapCenter(state = {lat: 0, lng: 0}, action) {
  if (action.type == 'MAP_RECENTER') {
    return {lat: action.lat, lng: action.lng}
  } else {
    return state
  }
}

export default mapCenter
