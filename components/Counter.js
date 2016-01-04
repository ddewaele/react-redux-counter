import React, { Component, PropTypes } from 'react'

// class Counter extends Component {
//   render() {
    
//     const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    
//     return (
//       <div>Hello222


//       <p>
//         Clicked: {counter} times
//         {' '}
//         <button onClick={increment}>+</button>
//         {' '}
//         <button onClick={decrement}>-</button>
//         {' '}
//         <button onClick={incrementIfOdd}>Increment if odd</button>
//         {' '}
//         <button onClick={() => incrementAsync()}>Increment async</button>
//       </p>

//       </div>
//     )
//   }
// }

// Counter.propTypes = {
//   increment: PropTypes.func.isRequired,
//   incrementIfOdd: PropTypes.func.isRequired,
//   incrementAsync: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired,
//   counter: PropTypes.number.isRequired
// }

var Counter = ({ increment, incrementIfOdd, incrementAsync, decrement, counter }) => (
  <p>
    Clicked: {counter} times
    {' '}
    <button onClick={increment}>+</button>
    {' '}
    <button onClick={decrement}>-</button>
    {' '}
    <button onClick={incrementIfOdd}>Increment if odd</button>
    {' '}
    <button onClick={() => incrementAsync()}>Increment async</button>
  </p>
)


export default Counter
