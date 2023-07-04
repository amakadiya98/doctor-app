import React from 'react'
import '../assets/css/commonComponent.css'
import FillStar from '../assets/images/star.svg'
import BlanckStar from '../assets/images/star-blanck.svg'
import Patient from '../assets/images/patient.png'
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

const UpcomingPatientsCard = () => {
  return (
   <div className='doctor-card upcomingPatientsCard'>
    <div className='doctor-card-content'>
        <div className='image-part d-flex align-items-center'>
            <img src={Patient} alt='Patient' className='w-100'/>
        </div>
        <div className='text-part w-100'>
            <h5>Emily Thomas</h5>
            <p className='gray'>Heart Surgery</p>
            <p>5:45 PM, <span style={{ color: '#ADADAD'}}>Feb 24</span></p>
            <Button className="componentBtn green-btn mt-3">30 Feb 2023</Button>
        </div>
    </div>
    <div className='progressBar'>
        <div className='progressText'>
            <p>Progress</p>
            <p>80%</p>
        </div>
        <ProgressBar now={60} />
    </div>
   <div className='bottom-bar'>
        <p>Dr. Henna S.</p>
   </div>
   </div>
  )
}

export default UpcomingPatientsCard