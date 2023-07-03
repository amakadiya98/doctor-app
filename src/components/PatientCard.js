
import React, { useState } from 'react'
import '../assets/css/commonComponent.css'
import FillStar from '../assets/images/star.svg'
import BlanckStar from '../assets/images/star-blanck.svg'
import Patient from '../assets/images/patient.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const DoctorCard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <div className='doctor-card'>
        <div className='doctor-card-content'>
            <div className='image-part d-flex justify-content-center align-content-center'>
                <img src={Patient} alt='doctor' />
            </div>
            <div className='text-part w-100 pe-4'>
                <h5>Jack Williams</h5>
                <p className='gray'>Knee Replacement</p>
                <p className='small'>Notes line</p>
                <Button className="componentBtn w-100 mt-3" onClick={handleShow}>Assign Now2</Button>
            </div>
        </div>
        <Modal show={show} onHide={handleClose} centered  size="md">
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   </div>
  )
}

export default DoctorCard