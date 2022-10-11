import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState, useRef } from 'react';


function BranchDetails({refreshEvent}) {

  const [ counter, setCounter ] = useState(30);
  const countRef = useRef(counter);
  countRef.current = counter;

  const reset = () =>{
    refreshEvent();
    setCounter(30);
  }

  useEffect(() =>{
    const timer = setInterval(() => {
      let currCount = countRef.current;
      setCounter(currCount => currCount - 1);

      if(currCount === 0) reset();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    
    // eslint-disable-next-line
  }, []);
  

  return (
    <div className='branch-details-container'>
        <Form.Select  size="md" className="w-20 branch-select" aria-label='Branch select option'>
            <option>Master</option>
        </Form.Select>
        <div className='refresh-btn'>
          <span className='counter'>{counter}</span>
          <Button variant='secondary' onClick={reset} >Refresh</Button>
        </div>
    </div>
  )
}

export default BranchDetails