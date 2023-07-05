import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import UploadIcon from '../../assets/images/upload.svg'
import { Button } from 'react-bootstrap';
const PatientContactDetails = () => {
  return (
    <Layout>
      <TopBar />
      <div className='main-content-part'>
        <div className='form-data'>
          <div className='filed'>
            <label>Patient Name</label>
            <input type='text' className='input-field' placeholder='Jack Williams' />
          </div>
          <div className='filed'>
            <label>Age</label>
            <input type='text' className='input-field' placeholder='25' />
          </div>
          <div className='filed'>
            <label>Injury Body Part</label>
            <input type='text' className='input-field' placeholder='Knee' />
          </div>
          <div className='filed'>
              <label>Injury information</label>
              <div class="mb-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write here…'></textarea>
            </div>
            </div>
          <div className='buttonPart mt-5 d-flex justify-content-center'>
                <Button className='theme-button'>Continue</Button>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default PatientContactDetails
