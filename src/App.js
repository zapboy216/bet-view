import React, { useState, useEffect } from 'react';
import apiService from './apiService'; // Import the API service
// Import other components if necessary

function App() {
 
const [nflOdds, setNflOdds] = useState([]); // State for NFL odds data

    // Fetch NFL odds data
  useEffect(() => {
    const loadNFLOdds = async () => {
      const data = await apiService.fetchNFLOdds();
      setNflOdds(data); // Update the NFL odds state with fetched data
    };
    loadNFLOdds();
  }, []);

  return (
    <div className="container">


     
      <section>
        <h2>NFL Odds</h2>
        {nflOdds.length > 0 ? (
          nflOdds.map(odd => (
            // Assuming 'odd' has properties like 'home_team', 'away_team'. 
            // Adjust based on your actual data structure.
            <div key={odd.id}>
              <h3>{odd.home_team} vs. {odd.away_team}</h3>
              {/* Render other details from the 'odd' object */}
            </div>
          ))
        ) : (
          <p>Loading NFL odds...</p>
        )}
      </section>
    </div>
  );
}

export default App;
