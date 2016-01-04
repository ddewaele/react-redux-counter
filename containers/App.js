import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'

// Create a container component for the presentational counter component


// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {

console.log("Found state " + state);

  return {
    counter: state.counter
  }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
