import React, { useState, useEffect } from 'react'
import BranchDetails from './components/BranchDetails';
import CommitHistoryDetails from './components/CommitHistoryDetails';
import { getCommits } from '../../common/util/httpService';


function CommitHistory() {

    const [ commitDetails, setCommitDetails ] = useState([]);
  
    const getCommitHistry = async() =>{
      const response = await getCommits();
      setCommitDetails(response)
    }

    useEffect(()=>{
      getCommitHistry();
    }, [])

    const handleRefreshEvent = async() =>{
      await getCommitHistry();
    }
    
  return (
    <div className='commit-hist-container'>
        <BranchDetails refreshEvent={handleRefreshEvent}  />
        <CommitHistoryDetails commitList={commitDetails}/>
    </div>
  )
}

export default CommitHistory