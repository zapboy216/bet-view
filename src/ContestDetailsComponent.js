import React from 'react';

function ContestDetailsComponent({ contest }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{contest.sport_title}</h5>
        <p className="card-text">
          {contest.home_team} vs. {contest.away_team}
        </p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

export default ContestDetailsComponent;
