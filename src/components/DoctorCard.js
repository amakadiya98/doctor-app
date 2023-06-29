import React from 'react'
import '../assets/css/commonComponent.css'
import FillStar from '../assets/images/star.svg'
import BlanckStar from '../assets/images/star-blanck.svg'
import Doctor from '../assets/images/doctor.png'
const DoctorCard = () => {
  return (
   <div className='doctor-card'>
    <div className='doctor-card-content'>
        <div className='image-part'>
            <img src={Doctor} alt='doctor' />
        </div>
        <div className='text-part'>
            <h5>Dr. Kate Brown</h5>
            <h6>Physiotherapist</h6>
            <p>20 yrs of exp. overall</p>
            <p>California, USA</p>
            <div className='rating'>
                <img src={FillStar} alt="star"/>
                <img src={FillStar} alt="star"/>
                <img src={FillStar} alt="star"/>
                <img src={FillStar} alt="star"/>
                <img src={BlanckStar} alt="star"/>
            </div>
        </div>
    </div>
   <div className='bottom-bar'>
        <p>3 Time Assigned</p>
   </div>
   </div>
  )
}

export default DoctorCard