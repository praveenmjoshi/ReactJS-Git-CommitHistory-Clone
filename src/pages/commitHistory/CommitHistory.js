import React from 'react'
import BranchDetails from './components/BranchDetails';
import CommitHistoryDetails from './components/CommitHistoryDetails';

function CommitHistory() {

    const CommitDetails = [];
    
  return (
    <div className='commit-hist-container'>
        <BranchDetails />
        <CommitHistoryDetails commitList={CommitDetails}/>
    </div>
  )
}

export default CommitHistory