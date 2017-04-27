import { ADD_STOP, CHANGE_STOP, DELETE_STOP } from '../actions/actionTypes'

class Stop {
  constructor(location, time) {
    console.log(location)
    this.location = location
    this.time = time;
  }
}

function stops(state = [], action) {
  switch (action.type) {
    case ADD_STOP:
      return [
        ...state,
        new Stop(action.location, action.time)
      ]
    case CHANGE_STOP:
      return state.map(
        (stop, index) => index == action.index?
          new Stop(action.location, action.time)
          : stop
      )
    case DELETE_STOP:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

export default stops
