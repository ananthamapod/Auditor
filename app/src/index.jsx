// eslint-disable-next-line no-unused-vars
import React from 'react'
import { render } from 'react-dom'
import auditorApp from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App.jsx'

let store = createStore(auditorApp)

function start() {
  render(
    (
      <Provider store={store}>
        <App/>
      </Provider>
    )
    , document.getElementById('app'))
}

export default start
