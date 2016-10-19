import React, { Component } from 'react'
import SearchPanel from './SearchPanel.jsx'
import ResultPanel from './ResultPanel.jsx'
import MapPanel from './MapPanel.jsx'

class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="main grid grid-fluid">
        <div className="row">
          <SearchPanel />
          <ResultPanel />
          <MapPanel />
        </div>
      </div>
    )
  }
}

export default App
