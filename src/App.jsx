import React, { useState } from 'react';

const App = () => {
  const [pd, setPd] = useState([])
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => setPd(data))
  return (
    <div>
      <h1>{pd.length}</h1>
    {
      pd.map(pd => <h1>{pd.title}</h1>)
    }
    </div>
  );
};

export default App;