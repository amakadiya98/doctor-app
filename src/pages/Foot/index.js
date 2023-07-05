import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import SearchIcon from '../../assets/images/search.svg'
import { Row, Col, Button, Nav, Tab } from 'react-bootstrap';
import '../../assets/css/foot.css'
import Ex1 from '../../assets/images/ex-1.png'

const Foot = () => {
    return (
        <Layout>
            <TopBar />
            <div className='main-content-part foot-page p-0' defaultActiveKey="first">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col xl={4} lg={5}>
                            <div className='foot-sidebar'>
                                <h6>Choose Session</h6>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        {/* <div className='checkbox-part-data'>
                                        <label class="control control--checkbox">First checkbox
                                        <input type="checkbox" checked="checked"/>
                                        <div class="control__indicator"></div>
                                        </label>
                                        <label class="control control--checkbox">Second checkbox
                                        <input type="checkbox"/>
                                        <div class="control__indicator"></div>
                                        </label>
                                        <label class="control control--checkbox">Disabled
                                        <input type="checkbox"/>
                                        <div class="control__indicator"></div>
                                        </label>
                                        <label class="control control--checkbox">Disabled & checked
                                        <input type="checkbox" />
                                        <div class="control__indicator"></div>
                                        </label>
                                        </div> */}
                                        <Nav.Link eventKey="first">
                                            Morning Session</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Afternoon Session</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Evening Session</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="four">Night Session</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>

                        </Col>
                        <Col xl={8} lg={7}>

                            <div className='content-data mt-5 pe-4'>
                                <div className='serchPart'>
                                    <div className='searchInput'>
                                        <div className='searchIcon'>
                                            <img src={SearchIcon} alt='searchIcon' />
                                        </div>
                                        <input type='text' placeholder='Search exercises' />
                                    </div>
                                </div>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
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
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
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
                                                        <h6>Bhujapidasana pose</h6>
                                                        <p>3 Times</p>
                                                    </div>
                                                </div>
                                                <div className='icon'>round</div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
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
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
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
                                           
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>

                            </div>
                            <div className='buttonPart mt-4 mx-auto'>

                                <Button className='theme-button d-block  mx-auto'>Next</Button>
                                <Button className='theme-outline-btn mt-3 d-block  mx-auto' style={{ backgroundColor: '#FDF5F2', borderColor: '#FDF5F2' }}>+ Add More</Button>
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </Layout>
    )
}

export default Foot
