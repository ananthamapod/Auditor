// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import Class from './Class.jsx'

class School extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let classElements = this.props.classes.map(
      (elem, ind) => <Class key={"class" + ind.toString()} classField={elem} />
    )
    return (
      <div className="row result">
        <div className="school col-4">
          <h3>{this.props.schoolName}</h3>
        </div>
        <div className="classes col-8">
          {classElements}
        </div>
      </div>
    )
  }
}

export default School
