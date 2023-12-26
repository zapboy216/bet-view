import React from 'react';
import ContestListComponent from './ContestListComponent';

function App() {
  // Here you will fetch and pass the JSON data
  const contests = {/* JSON data */};

  return (
    <div className="container">
      <h1>Sports Contests</h1>
      <ContestListComponent contests={contests} />
    </div>
  );
}

export default App;

