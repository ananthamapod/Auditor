import React, { Component, PropTypes } from 'react'
import Filter from './Filter.jsx'
import School from './School.jsx'

class ResultPanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-4 resultPanel">
        <h1 className="col-6">Results</h1>
        <Filter />
      </div>
    )
  }
}

export default ResultPanel
