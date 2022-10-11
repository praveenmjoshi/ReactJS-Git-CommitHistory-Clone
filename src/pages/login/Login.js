import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Login() {
    const [ show, setShow ] = useState(false);
    const closeModal = () => setShow(false);
    const openModal = () => setShow(true);

    const [ personalkey, setPersonalKey] = useState('')
    const personalKeyChange = (e) => setPersonalKey(e.target.value);

    useEffect(() =>{

        const key = localStorage.getItem('personalKey');
        if(!key){
            setShow(true);
        }     
    })

    const onSubmit = () =>{
        localStorage.setItem('personalKey', personalkey)
        setShow(false);
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