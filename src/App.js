import React from 'react';
import Tasklist from './Tasklist.js';

function App() {
  const tasks = [
    {id: 0, description: 'do this', done: false},
    {id: 1, description: 'do that', done: false}, 
  ];
  return (
    <div>
      <Tasklist tasks={tasks} />
    </div>
  );
}

export default App;

