import { useState, React } from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import '../../assets/css/doctorInfo.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Ex1 from '../../assets/images/ex-1.png'
import Button from 'react-bootstrap/Button';

const ExcersiceList = () => {
    const [key, setKey] = useState('morning');
    return (
        <Layout>
            <TopBar />
            <div className='main-content-part excersiceList'>
                <div className='exercise-tab-part'>
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

                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
                <div className='note-part'>
                <h6>Note</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className='button-part mt-3'>
            <Button className="theme-outline-btn mb-3">Change Exercise</Button>
                <Button className="theme-button">Done</Button>
            </div>
            </div>
           
        </Layout>
    )
}

export default ExcersiceList
