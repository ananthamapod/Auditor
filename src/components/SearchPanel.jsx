import React, { Component, PropTypes } from 'react'
import Filter from './Filter.jsx'
import Locator from './Locator.jsx'

class SearchPanel extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let autocomplete = new google.maps.places.Autocomplete(document.getElementById('location-input'))
  }

  render() {
    return (
      <div className="col-4 searchPanel">
        <h1>Search</h1>
        <form className="row">
          <div className="col-12">
            <label htmlFor="location-input">
              <div className="label-text">Location</div>
              <input id="location-input" className="form-input" type="text" placeholder="Location" />
              <Locator />
            </label>
          </div>
          <div className="col-12">
            <label htmlFor="time-input">
              <div className="label-text">Time</div>
              <input id="time-input" className="form-input" type="text" placeholder="Time" />
            </label>
          </div>
          <div className="col-12">
            <label htmlFor="subject-input">
              <div className="label-text">Subject</div>
              <input id="subject-input" className="form-input" type="text" placeholder="Subject" />
            </label>
          </div>
          <div className="col-12">
            <input className="form-input" type="submit" value="Search" />
          </div>
        </form>
        <Filter />
      </div>
    )
  }
}

export default SearchPanel
