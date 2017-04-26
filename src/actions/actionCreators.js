import * from './actionTypes'

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

export { getResults, mapRecenter, addToSchedule, removeFromSchedule, addStop, changeStop, deleteStop }
