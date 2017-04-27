import { connect } from 'react-redux'
import { getResults } from '../../actions/actionCreators'
import ResultPanel from '../presentational/ResultPanel.jsx'


const mapStateToProps = (state) => {
  return {
    results: state.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResults: () => {
      dispatch(getResults())
    }
  }
}

const ResultPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultPanel)

export default ResultPanelContainer
