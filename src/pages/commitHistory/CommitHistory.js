import React, { useState, useEffect } from 'react'
import BranchDetails from './components/BranchDetails';
import CommitHistoryDetails from './components/CommitHistoryDetails';
import Login from '../login/Login';
import { getCommits } from '../../common/util/httpService';


function CommitHistory() {

    const [ commitDetails, setCommitDetails ] = useState([]);

    const getCommitHistry = async() =>{
      const response = await getCommits();
      const data = response.map((item) => item.commit)
      setCommitDetails(data)
    }

    useEffect(()=>{
      getCommitHistry();
    }, [])
    
  return (
    <div className='commit-hist-container'>
        <Login />
        <BranchDetails />
        <CommitHistoryDetails commitList={commitDetails}/>
    </div>
  )
}

export default CommitHistory