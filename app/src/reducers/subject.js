import { CHANGE_SUBJECT } from '../actions/actionTypes'

function subject(state = '', action) {
  switch (action.type) {
    case CHANGE_SUBJECT:
      return action.subject
    default:
      return state
  }
}

export default subject
