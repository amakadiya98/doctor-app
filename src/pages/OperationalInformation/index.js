import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import UploadIcon from '../../assets/images/upload.svg'
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import PDFIcon from '../../assets/images/pdf.svg'
const OperationalInformation = () => {
  return (
    <Layout>
      <TopBar />
      <div className='main-content-part'>
        <div className='form-data full-width-data'>
          <h5 className='title'>Operation Information</h5>
          <Row className='g-4'>
            <Col lg="6">
              <div className='filed'>
                <label>Injury Body Part</label>
                <input type='text' className='input-field' placeholder='Knee' />
              </div>
              <div className='filed'>
                <label>Did you get operation?</label>
                <div className='yes-no-radio'>
                  <label>
                    <input type="radio" name="radio" checked/>
                    <div class="front-end box">
                      <span>Yes</span>
                    </div>
                  </label>

                    <label>
                    <input type="radio" name="radio"/>
                    <div class="back-end box">
                      <span>No</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className='filed'>
                <label>Operation Date</label>
                <input type='text' className='input-field' placeholder='22 feb 2023' />
              </div>
              <div className='filed'>
              <label>Injury information</label>
              <div class="mb-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write here…'></textarea>
            </div>
              </div>
            </Col>
            <Col lg="6">
            <div className='filed'>
                       
                       <div className='block'>
                           <p style={{fontWeight: '500'}}>Reports</p>
                           <div className='report-card'>
                               <div className='image-block'>
                                   <img src={PDFIcon} alt='icon' />
                               </div>
                               <div className='text-block ms-3'>
                                   <p className='fileName mb-0'>General Check</p>
                                   <p className='fileNo mb-0'>8 files</p>
                               </div>
                           </div>
                       </div>
                   </div>
              <div className='filed'>
                <div className='upload-part mt-2'>
                  <div class="form-group file-area">
                    <input type="file" name="images" id="images" required="required" multiple="multiple" />
                    <div class="file-dummy">
                      <div class="success">Great, your files are selected. Keep on.</div>
                      <div class="default"><div className='image-block mb-2'>
                        <img src={UploadIcon} alt='icon' />
                      </div>Add report here (png, jpg, pdf)</div>
                    </div>
                  </div>

                </div>
              </div>
            </Col>
          </Row>
          <div className='buttonPart mt-5 d-flex justify-content-center'>
            <Button className='theme-button'>Continue</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OperationalInformation
