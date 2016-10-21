import React, { Component, PropTypes } from 'react'
import Filter from './Filter.jsx'
import School from './School.jsx'

class ResultPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dummy_results : [
        {
          school: "Rutgers University",
          classes: [
            {
              title: "Operating Systems",
              time: "6:45 pm",
              courseNumber: "198:416"
            },
            {
              title: "Distributed Systems",
              time: "8:10 pm",
              courseNumber: "198:436"
            }
          ]
        }
      ]
    }
  }

  render() {
    let rows = this.state.dummy_results.map(
      (elem, ind) => <School key={"school-"+ind.toString()} schoolName={elem.school} classes={elem.classes}/>
    )
    return (
      <div className="col-4 resultPanel">
        <h1 className="col-6">Results</h1>
        <Filter />
        <div className="row results">
          <div className="col-12">
            {rows}
          </div>
        </div>
      </div>
    )
  }
}

export default ResultPanel
