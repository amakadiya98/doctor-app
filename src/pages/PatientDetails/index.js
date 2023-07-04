import React from 'react'
// import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import { Row, Col, Button } from 'react-bootstrap';
import Patient from '../../assets/images/patientInfo.png'
import Star from '../../assets/images/star.svg'
import Location from '../../assets/images/location.svg'
import Call from '../../assets/images/call.svg'
import Chat from '../../assets/images/chat.svg'
import User from '../../assets/images/user.svg'
import Verify from '../../assets/images/verify.svg'
import Rating from '../../assets/images/rating.svg'
import '../../assets/css/doctorInfo.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import PDFIcon from '../../assets/images/pdf.svg'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import NextIcon from '../../assets/images/left.svg'
import EditIcon from '../../assets/images/edit.svg'
const PatientDetails = () => {
  return (
    <Layout>
      <TopBar />
      <div className='main-content-part topBox'>
        <div className='top-orange-box'></div>
        <div className='innerInfo'>
            <Row>
                <Col lg={5}>
                    <div className='doctorDetailsCard'>
                        <div className='edit-button'>
                            <img src={EditIcon} alt='edit' />
                        </div>
                        <div className="doctorContent">
                            <div className='imnage-part'>
                                <img src={Patient} alt='doctor' />
                                
                            </div>
                            <div className='doctorInfo mt-0'>
                                <h4>Jack Williams</h4>
                                <h6 style={{color: '#ADADAD'}}>Jack williams@gmail.com</h6>
                                <h6>Knee Replacement</h6>
                                <h6><img src={Location} alt='location' /> California, USA</h6>
                            </div>
                            <div className='logInfo'>
                                <div className='badge call'>
                                    <img src={Call} alt='call' />
                                </div>
                                <div className='badge email'>
                                    <img src={Chat} alt='email' />
                                </div>
                            </div>
                            <div className='expData'>
                                <div className='part'>
                                    <img src={User} alt='user' />
                                    <h6>58</h6>
                                    <p>Patient</p>
                                </div>
                                <div className='part'>
                                    <img src={Verify} alt='verified' />
                                    <h6>12 years</h6>
                                    <p>Experience</p>
                                </div>
                                <div className='part'>
                                    <img src={Rating} alt='timer' />
                                    <h6>4.5</h6>
                                    <p>Till 7:00 PM</p>
                                </div>
                            </div>
                            <div className='aboutInfo'>
                                <h6>Injury Information</h6>
                                <p>Lorem Ipsum is simply dummy text of 
                                    theprinting and typesetting industry. 
                                    Lorem Ipsum is simply dummy text of  
                                    the printing and typesetting industry. 
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={7}>
                <div className='doctorDetailsCard mb-3'>
                    <Row className='w-100'>
                        <Col md={6}>
                            <div className='doctorDetailsCard'>
                                <div className='rightSmallCard'>
                                    <h6>5</h6>
                                    <p>Operation Date</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='doctorDetailsCard'>
                                <div className='rightSmallCard'>
                                    <h6>0</h6>
                                    <p>Assign by you</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='doctorDetailsCard startdata mb-3'>
                    <div className='rightPartData'>
                        <div className='infoField filed d-flex justify-content-between'>
                            <div className='data'>
                                <h6>Exercises</h6>
                                <h5>50 Reps</h5>
                            </div>
                            <div className='data'>
                                <Link to="/history" className='nextLink'><img src={NextIcon} alt="next-icon"/></Link>
                            </div>
                        </div>
                        <div className='filed'>
                        <div className='progressBar mb-4'>
                                <div className='progressText mb-2'>
                                    <p>Progress</p>
                                    <p>80%</p>
                                </div>
                                <ProgressBar now={60} />
                            </div>
                            <div className='block'>
                                <p style={{fontWeight: '500'}}>42 Reps</p>
                                <p>A little bit more to reach the target</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className='doctorDetailsCard startdata'>
                    <div className='rightPartData'>
                      
                        <div className='filed'>
                       
                            <div className='block'>
                                <p style={{fontWeight: '500'}}>Reports</p>
                                <div className='report-card'>
                                    <div className='image-block'>
                                        <img src={PDFIcon} alt='icon' />
                                    </div>
                                    <div className='text-block ms-3'>
                                        <p className='fileName'>General Check</p>
                                        <p className='fileNo'>8 files</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                </Col>
            </Row>
            <div className='buttonPart mt-3 d-flex justify-content-center'>
                <Button className='theme-button'>Suggest Exercises</Button>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default PatientDetails
