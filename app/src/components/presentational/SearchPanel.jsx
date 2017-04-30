// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import Filter from './Filter.jsx'
import LocatorContainer from '../container/LocatorContainer.jsx'
import ScheduleItem from './ScheduleItem.jsx'


class SearchPanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const stops = []
    for (let i = 0; i < this.props.stops.length; i++) {
      const stop = this.props.stops[i]
      stops.push(<ScheduleItem key={i} index={i} location={stop.location} time={stop.time} onChangeStop={this.props.handleChangeStop}><LocatorContainer /></ScheduleItem>)
    }
    return (
      <div className="col-4 searchPanel">
        <h1>Search</h1>
        <form className="row">
          {stops}
          <div className="col-12">
            <input className="form-input" type="button" value="Add stop" onClick={this.props.addStop} />
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
