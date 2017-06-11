import { connect } from 'react-redux'
import { getResults } from '../../actions/actionCreators'
import ResultPanel from '../presentational/ResultPanel.jsx'


const mapStateToProps = (state) => {
  return state.search
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
