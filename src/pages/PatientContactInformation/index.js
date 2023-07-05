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

const PatientContactInformation = () => {
    return (
        <Layout>
        <TopBar />
        <div className='main-content-part topBox'>
        <div className='innerInfo mt-5'>
            <Row>
                <Col xl={7} lg={8}>
                    <div className='doctorDetailsCard back-orange'>
                        <div className='edit-button'>
                            <img src={EditIcon} alt='edit' />
                        </div>
                        <div className="doctorContent" style={{ alignItems: 'flex-start'}}>
                        <div className='imnage-part'>
                                <img src={Patient} alt='doctor' />
                                
                            </div>
                            <div className='doctor-info-part d-flex w-100'>
                            <div className='doctor-data-part d-flex' style={{flex: 1}}>
                                <div className='doctorInfo mt-0'>
                                    <h4>Jack Williams</h4>
                                    <h6 style={{color: '#ADADAD'}}>Jack williams@gmail.com</h6>
                                    <h6>Knee Replacement</h6>
                                    <h6><img src={Location} alt='location' /> California, USA</h6>
                                </div>
                            </div>
                            <div className='doctor-contact-part d-flex align-items-start' style={{flex: 1}}>
                            <div className='logInfo'>
                                <div className='badge call'>
                                    <img src={Call} alt='call' />
                                </div>
                                <div className='badge email'>
                                    <img src={Chat} alt='email' />
                                </div>
                            </div>
                            </div>
                            </div>
                          
                           
                            <div className='aboutInfo mt-5'>
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
                <Col xl={5} lg={4}>
                <div className='doctorDetailsCard mb-3'>
                    <Row className='w-100 gy-3'>
                        <Col md={12}>
                            <div className='doctorDetailsCard'>
                                <div className='rightSmallCard'>
                                    <h6>22 Feb, 2023</h6>
                                    <p>Operation Date</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className='doctorDetailsCard'>
                                <div className='rightSmallCard'>
                                    <h6>Knee</h6>
                                    <p>Injury body part</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
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
            <div className='buttonPart mt-4 mx-auto'>
                <Button className='theme-outline-btn mb-3 d-block  mx-auto'>Assign Physiotherapist</Button>
                <Button className='theme-button d-block  mx-auto'>Suggest Exercises</Button>
            </div>
        </div>
      </div>
      </Layout>
    )
}

export default PatientContactInformation
