import React, { useState, useMemo } from 'react';

const slowFunction = num => {
  console.log('Slow Function is being called!');

  for (let index = 0; index < 1000; index++) {}

  return num + 1;
}

function App() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <>
      <p>{number}</p>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => setNumber(2)}>Increment</button>
      <p>text: {text}</p>
    </>
  );
}

export default App;
