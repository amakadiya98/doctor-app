import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import UploadIcon from '../../assets/images/upload.svg'
import { Button } from 'react-bootstrap';
const PersonalInformation = () => {
  return (
    <Layout>
      <TopBar />
      <div className='main-content-part'>
        <div className='form-data'>
          <h5 className='title'>Personal Information</h5>
          <div className='filed'>
            <label>Patient Name</label>
            <input type='text' className='input-field' placeholder='Jack Williams' />
          </div>
          <div className='filed'>
            <label>Age</label>
            <input type='text' className='input-field' placeholder='25' />
          </div>
          <div className='filed'>
            <label>Add Image</label>
            <div className='upload-part mt-2'>
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
          <div className='buttonPart mt-5 d-flex justify-content-center'>
                <Button className='theme-button'>Continue</Button>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default PersonalInformation
