import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [name, setName] = useState('');
  const previousName = useRef();
  
  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <p>Hello! My name is {name}</p>
      <p>And my name was {previousName.current}</p>
    </>
  );
}

export default App;
