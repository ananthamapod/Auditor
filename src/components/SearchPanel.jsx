import React, { Component, PropTypes } from 'react'
import Filter from './Filter.jsx'
import Locator from './Locator.jsx'
import ScheduleItem from './ScheduleItem.jsx'

class Stop {
  constructor(location, time) {
    this.location = location
    this.time = time;
  }
}

class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stops: [
        new Stop()
      ]
    }

    this.handleChangeStop = this.handleChangeStop.bind(this)
    this.addStop = this.addStop.bind(this)
  }

  handleChangeStop(location, time, index) {
    let stops = this.state.stops
    let stop = stops[index]
    stop.location = location
    stop.time = time
    this.setState({stops: stops})
  }

  addStop() {
    let stops = this.state.stops
    stops.push(new Stop())
    this.setState({stops: stops})
  }

  render() {
    const stops = []
    for (let i = 0; i < this.state.stops.length; i++) {
      const stop = this.state.stops[i]
      stops.push(<ScheduleItem key={i} onChangeStop={this.handleChangeStop}><Locator /></ScheduleItem>)
    }
    return (
      <div className="col-4 searchPanel">
        <h1>Search</h1>
        <form className="row">
          {stops}
          <div className="col-12">
            <input className="form-input" type="button" value="Add stop" onClick={this.addStop} />
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
