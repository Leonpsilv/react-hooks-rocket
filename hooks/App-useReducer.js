import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return{
        counter: state.counter + 1,
      };
    case 'decrement':
      return{
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
    </>
  );
}

export default App;
