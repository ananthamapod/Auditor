import React from 'react'
import { render } from 'react-dom'
//import { createStore } from 'redux'
//import { Provider } from 'react-redux'
import App from './components/App.jsx'

/*class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello React!</p>
        <AwesomeComponent />
      </div>
    )
  }
}*/

/*const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD':
      return state
    default:
      return state
  }
}*/

//let store = createStore(sampleReducer)
function start() {
  render(
    (
      //<Provider store={store}>
        <App/>
      //</Provider>
    )
    , document.getElementById('app'))
}

export default start
