import { GET_RESULTS } from '../actions/actionTypes'

let default_state = [
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

function results(state = default_state, action) {
  switch (action.type) {
    case GET_RESULTS:
      return state
    default:
      return state
  }
}

export default results
