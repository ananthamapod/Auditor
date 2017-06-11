import { GET_RESULTS, ADD_TO_SCHEDULE, REMOVE_FROM_SCHEDULE, MAP_RECENTER, ADD_STOP, CHANGE_STOP, DELETE_STOP, CHANGE_SUBJECT, SEARCH, RECEIVE_RESULTS } from './actionTypes'

function getResults() {
  return {
    type: GET_RESULTS
  }
}

function mapRecenter(location) {
  return {
    type: MAP_RECENTER,
    lat: location.lat,
    lng: location.lng
  }
}

function addToSchedule(newClass) {
  return {
    type: ADD_TO_SCHEDULE,
    newClass
  }
}

function removeFromSchedule(index) {
  return {
    type: REMOVE_FROM_SCHEDULE,
    index
  }
}

function addStop(location, time) {
  return {
    type: ADD_STOP,
    location,
    time
  }
}

function changeStop(index, location, time) {
  return {
    type: CHANGE_STOP,
    index,
    location,
    time
  }
}

function deleteStop(index) {
  return {
    type: DELETE_STOP,
    index
  }
}

function changeSubject(subject) {
  return {
    type: CHANGE_SUBJECT,
    subject
  }
}

function search() {
  return {
    type: SEARCH
  }
}

function receiveResults(json) {
  return {
    type: RECEIVE_RESULTS,
    results: json.data.results.map(child => child.data),
    receivedAt: Date.now()
  }
}

export { getResults, mapRecenter, addToSchedule, removeFromSchedule, addStop, changeStop, deleteStop, changeSubject, search, receiveResults }
