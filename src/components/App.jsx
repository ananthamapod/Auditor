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
          <h1 id="app-title">Auditor</h1>
        </header>
        <main>
          <div className="main grid grid-fluid">
            <div className="row">
              <SearchPanel />
              <ResultPanel results={[]} />
              <MapPanel />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App
