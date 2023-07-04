import { useState, React } from 'react'
// import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import { Row, Col, Button } from 'react-bootstrap';
import '../../assets/css/doctorInfo.css'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Ex1 from '../../assets/images/ex-1.png'

const History = () => {
    const [key, setKey] = useState('morning');
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
                                    <div className='filed pb-3'>
                                        <div className='exercise-tab-part'>
                                            <h6 className='title'>11th Feb Exercises</h6>
                                            <Tabs
                                                id="controlled-tab-example"
                                                activeKey={key}
                                                onSelect={(k) => setKey(k)}
                                                className="mb-3"
                                            >
                                                <Tab eventKey="morning" title="Morning">
                                                    <div className='exercise-content'>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Running</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div className='icon'>round</div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>squatting with rubber</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div className='icon'>round</div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Bhujapidasana pose</h6>
                                                                    <p>3 Times</p>
                                                                </div>
                                                            </div>
                                                            <div className='icon'>round</div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="afternoon" title="Afternoon">
                                                <div className='exercise-content'>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Running</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div className='icon'>round</div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>squatting with rubber</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div className='icon'>round</div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Bhujapidasana pose</h6>
                                                                    <p>3 Times</p>
                                                                </div>
                                                            </div>
                                                            <div className='icon'>round</div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="evening" title="Evening">
                                                <div className='exercise-content'>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Running</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div className='icon'>round</div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>squatting with rubber</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div className='icon'>round</div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Bhujapidasana pose</h6>
                                                                    <p>3 Times</p>
                                                                </div>
                                                            </div>
                                                            <div className='icon'>round</div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="night" title="Night">
                                                <div className='exercise-content'>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Running</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div className='icon'>round</div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>squatting with rubber</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div className='icon'>round</div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Bhujapidasana pose</h6>
                                                                    <p>3 Times</p>
                                                                </div>
                                                            </div>
                                                            <div className='icon'>round</div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </Col>
                    </Row>

                </div>
            </div>
        </Layout>
    )
}

export default History
