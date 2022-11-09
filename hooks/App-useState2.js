import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevState => prevState + 1)
  }

  return (
    <>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={increment}>+1</button>
    </>
  );
}

export default App;
