import React, { Component } from 'react'
import SearchPanel from './SearchPanel.jsx'
import ResultPanel from './ResultPanel.jsx'
import MapPanel from './MapPanel.jsx'

class App extends Component {
  constructor(props) {
    super(props)

  }
  // hello
  render() {
    return (
      <div id="app-inner">
        <header>
          <nav>
            <ul className="mainNav">
              <li>Home</li>
              <li>Usage</li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="main grid grid-fluid">
            <div className="row">
              <SearchPanel />
              <ResultPanel />
              <MapPanel />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App
