import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Whateaver</p>
      </div>
    )
  }
}

const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

let store = createStore(sampleReducer)

render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  )
  , document.getElementById('app'))
