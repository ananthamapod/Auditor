import React, { Component } from 'react'
import PropTypes from 'prop-types'
import School from './School.jsx'

class ResultPanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let rows = this.props.results.map(
      (elem, ind) => <School key={"school-"+ind.toString()} schoolName={elem.school} classes={elem.classes}/>
    )
    return (
      <div className="col-4 resultPanel">
        <div className="row">
          <h1 className="col-12">Results</h1>
        </div>
        <div className="row results">
          <div className="col-12">
            {rows}
          </div>
        </div>
      </div>
    )
  }
}

ResultPanel.PropTypes = {
  results: PropTypes.array.isRequired
}

export default ResultPanel
