import React from "react";

function SportsListComponent({ sports }) {
  if (!sports) {
    return <div>Loading...</div>; // Handle undefined or loading state
  }

  return (
    <div>
      {sports.map(sport => (
        <div key={sport.key}>
          {/* Render sport details */}
          <h5>{sport.title}</h5>
          <p>{sport.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SportsListComponent;
