import React, { Component, PropTypes } from 'react'
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
        },
        {
          school: "Kean University",
          classes: [
            {
              title: "History of Language",
              time: "6:00 pm",
              courseNumber: "198:416"
            },
            {
              title: "Anatomy and Physiology",
              time: "3:15 pm",
              courseNumber: "198:436"
            }
          ]
        },
        {
          school: "Montclair University",
          classes: [
            {
              title: "Creative Writing - Short Fiction",
              time: "7:20 pm",
              courseNumber: "198:416"
            },
            {
              title: "Geology",
              time: "3:15 pm",
              courseNumber: "198:436"
            }
          ]
        },
        {
          school: "NJIT",
          classes: [
            {
              title: "Perception for Robotics",
              time: "6:40 pm",
              courseNumber: "198:416"
            },
            {
              title: "Music and Computers",
              time: "3:15 pm",
              courseNumber: "198:436"
            }
          ]
        },
        {
          school: "TCNJ",
          classes: [
            {
              title: "Excercise Science",
              time: "4:00 pm",
              courseNumber: "198:416"
            },
            {
              title: "Thermodynamics",
              time: "4:55 pm",
              courseNumber: "198:436"
            }
          ]
        },
        {
          school: "Rider University",
          classes: [
            {
              title: "Logic",
              time: "5:30 pm",
              courseNumber: "198:300"
            },
            {
              title: "Quantum Neutrino Fields",
              time: "4:45 pm",
              courseNumber: "198:436"
            }
          ]
        },
        {
          school: "Rowan University",
          classes: [
            {
              title: "The Evolution of Modern Jazz",
              time: "6:40 pm",
              courseNumber: "198:416"
            },
            {
              title: "Embedded Systems",
              time: "3:15 pm",
              courseNumber: "198:436"
            }
          ]
        },
        {
          school: "Seton Hall University",
          classes: [
            {
              title: "Embedded Systems",
              time: "3:15 pm",
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
        <div className="row">
          <h1 className="col-12">Results</h1>
        </div>
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
