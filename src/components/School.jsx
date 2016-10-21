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
    console.log(classElements)
    return (
      <div className="row">
        <div className="col-4">
          <h3>{this.props.schoolName}</h3>
        </div>
        <div className="col-8">
          {classElements}
        </div>
      </div>
    )
  }
}

export default School
