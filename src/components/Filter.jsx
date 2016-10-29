import React, { Component } from 'react'

class Filter extends Component {
  constructor(props) {
    super(props)
  }

  filter(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <form onSubmit={this.filter}>
            <fieldset>
              <legend>Priority</legend>
              <label className="radio-label" htmlFor="radio-location">
                <input className="form-radio" id="radio-location" type="radio" name="priority" value="location" />
                <span>Location</span>
              </label>
              <label className="radio-label" htmlFor="radio-time">
                <input className="form-radio" id="radio-time" type="radio" name="priority" value="time" />
                <span>Time</span>
              </label>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default Filter
