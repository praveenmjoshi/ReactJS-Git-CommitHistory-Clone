import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    let location = useLocation();
    let navigate = useNavigate();
    let { from } = location.state || { from: { pathname: "/" } };

    const [ show, setShow ] = useState(false);
    const closeModal = () => setShow(false);

    const [ personalkey, setPersonalKey] = useState('')
    const personalKeyChange = (e) => setPersonalKey(e.target.value);

    useEffect(() =>{

        const key = localStorage.getItem('personalKey');
        if(!key){
            setShow(true);
        }else{
            navigate(from);   
        } 
        
    }, [from, navigate])

    const onSubmit = () =>{
        localStorage.setItem('personalKey', personalkey)
        setShow(false);
        navigate(from);
    }

  return (
    <>
        <Modal show={show} onHide={closeModal} className='modal-popup'>
            <Modal.Header>
                <p className='title'>Please enter your Github Personal Access key</p>
            </Modal.Header>
            <Modal.Body>
                <input className='w-100' type='text' value={personalkey} onChange={(e) => personalKeyChange(e)}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={closeModal}>Cancel</Button>
                <Button onClick={onSubmit}>Submit</Button>
            </Modal.Footer>

        </Modal>
    </>
  )
}

export default Login