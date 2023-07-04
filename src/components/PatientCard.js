
import React, { useState } from 'react'
import '../assets/css/commonComponent.css'
import FillStar from '../assets/images/star.svg'
import BlanckStar from '../assets/images/star-blanck.svg'
import Patient from '../assets/images/patient.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UploadIcon from '../assets/images/upload.svg'
import { useLocation, Link, useNavigate } from 'react-router-dom'
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
                <Button className="componentBtn w-100 mt-3" onClick={handleShow}>Assign Now</Button>
            </div>
        </div>
        <Modal show={show} onHide={handleClose} centered  size="md">
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='body-content'>
            <p className='body-title'>Information Note</p>
            <div class="mb-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Write text…'></textarea>
            </div>
            <p className='body-title'>Add Reports</p>
            <div className='upload-part'>
            <div class="form-group file-area">
                <input type="file" name="images" id="images" required="required" multiple="multiple"/>
              <div class="file-dummy">
                <div class="success">Great, your files are selected. Keep on.</div>
                <div class="default"><div className='image-block mb-2'>
                  <img src={UploadIcon} alt='icon'/>
                  </div>Add report here (png, jpg, pdf)</div>
              </div>
            </div>
  
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='theme-button'>
            Next
          </Button>
         <Link to="/" className="footerLink">Skip for now</Link>
        </Modal.Footer>
      </Modal>
   </div>
  )
}

export default DoctorCard