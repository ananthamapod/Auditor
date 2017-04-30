// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

class Class extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          {this.props.classField.title}
        </div>
        <div className="col-3">
          {this.props.classField.time}
        </div>
        <div className="col-3">
          {this.props.classField.courseNumber}
        </div>
      </div>
    )
  }
}

export default Class
