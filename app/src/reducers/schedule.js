import { ADD_TO_SCHEDULE, REMOVE_FROM_SCHEDULE } from '../actions/actionTypes'

function schedule(state = [], action) {
  switch (action.type) {
    case ADD_TO_SCHEDULE:
      return [...state, action.newClass].sort()
    case REMOVE_FROM_SCHEDULE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

export default schedule
