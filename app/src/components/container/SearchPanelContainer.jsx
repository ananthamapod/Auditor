import { connect } from 'react-redux'
import { changeStop, addStop, deleteStop } from '../../actions/actionCreators'
import SearchPanel from '../presentational/SearchPanel.jsx'


const mapStateToProps = (state) => {
  return {
    stops: state.stops
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeStop: (location, time, index) => {
      dispatch(changeStop(location, time, index))
    },
    addStop: () => {
      dispatch(addStop("", ""))
    },
    deletestop: (index) => {
      dispatch(deleteStop(index))
    }
  }
}

const SearchPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel)

export default SearchPanelContainer
