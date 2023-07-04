import React from 'react'
// import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import { Row, Col, Button } from 'react-bootstrap';
import '../../assets/css/doctorInfo.css'
import { useLocation, Link, useNavigate } from 'react-router-dom'
const DoctorAllSlot = () => {
  return (
    <Layout>
      <TopBar />
      <div className='main-content-part topBox'>
        <div className='innerInfo withoutOrange'>
            <Row>
                <Col lg={5}>
                    <div className='doctorDetailsCard'>
                        <div className="doctorContent">
                            calendar
                        </div>
                    </div>
                </Col>
                <Col lg={7}>
                <div className='doctorDetailsCard startdata mb-3'>
                    <div className='rightPartData'>
                        <div className='locationTimeField filed pb-3'>
                            <div className='block'>
                                <p>Manipal Hospital, California, USA</p>
                                <p><span>12 slots available</span></p>
                                <h5 className='mt-1'>$800 Fees</h5>
                            </div>
                            <div className='block'>
                                <p>Wait Time</p>
                                <p className='badge'>60 min</p>
                            </div>
                        </div>
                      
                    </div>
                    
                </div>
                <div className='doctorDetailsCard startdata'>
                    <div className='rightPartData'>
                        <div className='infoField filed border-0'>
                            <p>Morning</p>
                            <div className='radio-badge-part'>
                                <form>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span>9:00 AM</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span>9:30 AM</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span>10:00 AM</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span>10:30 AM</span>
                                    </label>
                                </form>
                            </div>
                        </div>
                        <div className='infoField filed border-0'>
                            <p>Evening</p>
                            <div className='radio-badge-part'>
                                <form>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span>9:00 AM</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span>9:30 AM</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span>10:00 AM</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span>10:30 AM</span>
                                    </label>
                                </form>
                            </div>
                        </div>
                        <div className='infoField filed'>
                            <p>Night</p>
                            <p className='no-slot'>No Slots</p>
                        </div>
                    </div>
                   
                </div>
                </Col>
            </Row>
            <div className='buttonPart mt-5 d-flex justify-content-center'>
                <Button className='theme-button'>Book Appointment</Button>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default DoctorAllSlot
