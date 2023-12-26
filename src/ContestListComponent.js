import React from 'react';
import ContestDetailsComponent from './ContestDetailsComponent';

function ContestListComponent({ contests }) {
  return (
    <div>
      {contests.map(contest => (
        <ContestDetailsComponent key={contest.id} contest={contest} />
      ))}
    </div>
  );
}

export default ContestListComponent;
