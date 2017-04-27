import React, { Component } from 'react'
import SearchPanelContainer from './container/SearchPanelContainer.jsx'
import ResultPanelContainer from './container/ResultPanelContainer.jsx'
import MapPanel from './presentational/MapPanel.jsx'

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
              <SearchPanelContainer />
              <ResultPanelContainer />
              <MapPanel />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App
