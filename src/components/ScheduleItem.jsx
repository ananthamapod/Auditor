import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Filter from './Filter.jsx'
import Locator from './Locator.jsx'

class ScheduleItem extends Component {
  constructor(props) {
    super(props)

    this.handleChangeLocation = this.handleChangeLocation.bind(this)
    this.handleChangeTime = this.handleChangeTime.bind(this)
  }

  handleChangeLocation(e) {
    this.setState({location: e.target.value})
    this.props.onChangeStop(this.props.location, this.props.time, this.props.index)
  }

  handleChangeTime(e) {
    this.setState({time: e.target.value})
    this.props.onChangeStop(this.props.location, this.props.time, this.props.index)
  }

  componentDidMount() {
    let autocomplete = new google.maps.places.Autocomplete(document.getElementById('location-input' + this.props.index))
  }

  render() {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-6">
            <label htmlFor={"location-input" + this.props.index}>
              <div className="label-text">Location</div>
              <input id={"location-input" + this.props.index} className="form-input location-input" type="text" placeholder="Location" onChange={this.handleChangeLocation} />
              {this.props.children}
            </label>
          </div>
          <div className="col-6">
            <label htmlFor={"time-input" + this.props.index}>
              <div className="label-text">Time</div>
              <input id={"time-input" + this.props.index} className="form-input time-input" type="text" placeholder="Time"  onChange={this.handleChangeTime} />
            </label>
          </div>
        </div>
      </div>
    )
  }
}

ScheduleItem.propTypes = {
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export default ScheduleItem
