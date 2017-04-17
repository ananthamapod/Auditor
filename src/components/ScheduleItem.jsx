import React, { Component, PropTypes } from 'react'
import Filter from './Filter.jsx'
import Locator from './Locator.jsx'

class ScheduleItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: "",
      time: ""
    }

    this.handleChangeLocation = this.handleChangeLocation.bind(this)
    this.handleChangeTime = this.handleChangeTime.bind(this)
  }

  handleChangeLocation(e) {
    this.setState({location: e.target.value})
    this.props.onChangeStop(this.state.location, this.state.time, this.props.key)
  }

  handleChangeTime(e) {
    this.setState({time: e.target.value})
    this.props.onChangeStop(this.state.location, this.state.time, this.props.key)
  }

  componentDidMount() {
    let autocomplete = new google.maps.places.Autocomplete(document.getElementById('location-input' + this.props.key))
  }

  render() {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-6">
            <label htmlFor={"location-input" + this.props.key}>
              <div className="label-text">Location</div>
              <input id={"location-input" + this.props.key} className="form-input location-input" type="text" placeholder="Location" onChange={this.handleChangeLocation} />
              {this.props.children}
            </label>
          </div>
          <div className="col-6">
            <label htmlFor={"time-input" + this.props.key}>
              <div className="label-text">Time</div>
              <input id={"time-input" + this.props.key} className="form-input time-input" type="text" placeholder="Time"  onChange={this.handleChangeTime} />
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default ScheduleItem
