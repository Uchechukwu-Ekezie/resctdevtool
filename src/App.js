import React from 'react';
import Counter from './Counter';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <h1>Sample React Application</h1>
      <Greeting name="John" />
      <Counter />
    </div>
  );
}

export default App;
