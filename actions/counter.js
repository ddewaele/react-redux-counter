export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

// export function increment() {
//   return {
//     type: INCREMENT_COUNTER
//   }
// }

export function increment() {
  return (dispatch) => {
    dispatch({
      type: INCREMENT_COUNTER
    });
  }
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}


// Here, the action that will be dispatched is a function.
// Its a function because we first need to execute some business logic and then do the actual dispatching
// Redux will ensure that the dispatch and getState objects are properly injected.
export function incrementIfOdd() {
  return (dispatch, getState) => {

    const { counter } = getState()

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}
