import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {greeting : 'Hello', other : 'Goodbye'}
    this.reject = this.reject.bind(this)
  }

  reject() {
    this.setState((prevState) => ({greeting : prevState.other, other : prevState.greeting}))
  }

  render() {
    return (
      <div>
        <h1 className="col-6">{this.state.greeting}</h1>
        <span className="heart" onClick={this.reject} />
      </div>
    )
  }
}

function start() {
  render(
    <App />,
    document.getElementById("app")
  )
}

export default start
