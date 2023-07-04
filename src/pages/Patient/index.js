import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import UpcomingPatientsCard from '../../components/UpcomingPatientsCard'
import { Row, Col } from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PatientImg from '../../assets/images/patient.png';

const Patient = () => {
  return (
    <Layout>
      <div className='main-content-part topBox'>
        <div className='innerInfo withoutOrange'>
          <Row>
            <Col lg={5}>
              <div className='doctorDetailsCard'>
                <div className="doctorContent">
                  calendar
                </div>
                <div className='patientInfoData'>
                  <h6>Today’s Appointment</h6>
                  <div className='appointmentPart'>
                    <div className='doctor-card upcomingPatientsCard mb-3'>
                      <div className='doctor-card-content'>
                        <div className='image-part d-flex align-items-center'>
                          <img src={PatientImg} alt='Patient' className='w-100' />
                        </div>
                        <div className='text-part w-100'>
                          <h5>Emily Thomas</h5>
                          <p className='gray'>Heart Surgery</p>
                          <p>5:45 PM, <span style={{ color: '#ADADAD' }}>Feb 24</span></p>
                          <Button className="componentBtn green-btn mt-3">30 Feb 2023</Button>
                        </div>
                      </div>

                    </div>
                    <div className='doctor-card upcomingPatientsCard mb-3'>
                      <div className='doctor-card-content'>
                        <div className='image-part d-flex align-items-center'>
                          <img src={PatientImg} alt='Patient' className='w-100' />
                        </div>
                        <div className='text-part w-100'>
                          <h5>Emily Thomas</h5>
                          <p className='gray'>Heart Surgery</p>
                          <p>5:45 PM, <span style={{ color: '#ADADAD' }}>Feb 24</span></p>
                          <Button className="componentBtn green-btn mt-3">30 Feb 2023</Button>
                        </div>
                      </div>

                    </div>
                    <div className='doctor-card upcomingPatientsCard mb-3'>
                      <div className='doctor-card-content'>
                        <div className='image-part d-flex align-items-center'>
                          <img src={PatientImg} alt='Patient' className='w-100' />
                        </div>
                        <div className='text-part w-100'>
                          <h5>Emily Thomas</h5>
                          <p className='gray'>Heart Surgery</p>
                          <p>5:45 PM, <span style={{ color: '#ADADAD' }}>Feb 24</span></p>
                          <Button className="componentBtn green-btn mt-3">30 Feb 2023</Button>
                        </div>
                      </div>

                    </div>
                    <div className='doctor-card upcomingPatientsCard mb-3'>
                      <div className='doctor-card-content'>
                        <div className='image-part d-flex align-items-center'>
                          <img src={PatientImg} alt='Patient' className='w-100' />
                        </div>
                        <div className='text-part w-100'>
                          <h5>Emily Thomas</h5>
                          <p className='gray'>Heart Surgery</p>
                          <p>5:45 PM, <span style={{ color: '#ADADAD' }}>Feb 24</span></p>
                          <Button className="componentBtn green-btn mt-3">30 Feb 2023</Button>
                        </div>
                      </div>

                    </div>
                    <div className='doctor-card upcomingPatientsCard mb-3'>
                      <div className='doctor-card-content'>
                        <div className='image-part d-flex align-items-center'>
                          <img src={PatientImg} alt='Patient' className='w-100' />
                        </div>
                        <div className='text-part w-100'>
                          <h5>Emily Thomas</h5>
                          <p className='gray'>Heart Surgery</p>
                          <p>5:45 PM, <span style={{ color: '#ADADAD' }}>Feb 24</span></p>
                          <Button className="componentBtn green-btn mt-3">30 Feb 2023</Button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className='mb-4'>
                <Link to="/allPatient">
                  <UpcomingPatientsCard />
                </Link>
                
              </div>
              <div className='mb-4'>
                <Link to="/allPatient">
                  <UpcomingPatientsCard />
                </Link>
                
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default Patient
