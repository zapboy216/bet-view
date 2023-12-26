import React, { useState, useEffect } from 'react';
import apiService from './apiService';  // Import the service
import ContestListComponent from './ContestListComponent';

function App() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const loadSports = async () => {
      const data = await apiService.fetchSports();
      setSports(data);
    };
    
    loadSports();
  }, []);

  return (
    <div className="container">
      <h1>Sports Contests</h1>
      <ContestListComponent sports={sports} />
    </div>
  );
}

export default App;


