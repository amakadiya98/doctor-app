import React from 'react'
import '../assets/css/commonComponent.css'
import Patient from '../assets/images/patient.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const AppointmentCard = () => {
    return (
        <div class='container-fluid' >      
        <OwlCarousel items={3.5}
            className="owl-theme"
            loop
            nav={false}
            dots={false}
            margin={30} >
            <div>
                <div className='appointment-card'>
                    <div className='doctor-card-content'>
                        <div className='img-time-part'>
                            <div className='image-part'>
                                <img src={Patient} alt='Patient' />
                            </div>
                            <div className='time-part'>
                                <p>5:45 PM</p>
                                <p className='gray'>Feb 24</p>
                            </div>
                        </div>
                        <div className='text-part'>
                            <h5 className='name'>Jack</h5>
                            <h5 className='name'>Williams</h5>
                            <h6>Knee Replacement</h6>
                            <p className='date'>30 Feb 2023</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='appointment-card'>
                    <div className='doctor-card-content'>
                        <div className='img-time-part'>
                            <div className='image-part'>
                                <img src={Patient} alt='Patient' />
                            </div>
                            <div className='time-part'>
                                <p>5:45 PM</p>
                                <p className='gray'>Feb 24</p>
                            </div>
                        </div>
                        <div className='text-part'>
                            <h5 className='name'>Ella</h5>
                            <h5 className='name'>Devies</h5>
                            <h6>Back Pain</h6>
                            <p className='date'>30 Feb 2023</p>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className='appointment-card'>
                    <div className='doctor-card-content'>
                        <div className='img-time-part'>
                            <div className='image-part'>
                                <img src={Patient} alt='Patient' />
                            </div>
                            <div className='time-part'>
                                <p>5:45 PM</p>
                                <p className='gray'>Feb 24</p>
                            </div>
                        </div>
                        <div className='text-part'>
                            <h5 className='name'>Emily</h5>
                            <h5 className='name'>Thomas</h5>
                            <h6>Heart Surgery</h6>
                            <p className='date'>30 Feb 2023</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='appointment-card'>
                    <div className='doctor-card-content'>
                        <div className='img-time-part'>
                            <div className='image-part'>
                                <img src={Patient} alt='Patient' />
                            </div>
                            <div className='time-part'>
                                <p>5:45 PM</p>
                                <p className='gray'>Feb 24</p>
                            </div>
                        </div>
                        <div className='text-part'>
                            <h5 className='name'>Jack</h5>
                            <h5 className='name'>Williams</h5>
                            <h6>Knee Replacement</h6>
                            <p className='date'>30 Feb 2023</p>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className='appointment-card'>
                    <div className='doctor-card-content'>
                        <div className='img-time-part'>
                            <div className='image-part'>
                                <img src={Patient} alt='Patient' />
                            </div>
                            <div className='time-part'>
                                <p>5:45 PM</p>
                                <p className='gray'>Feb 24</p>
                            </div>
                        </div>
                        <div className='text-part'>
                            <h5 className='name'>Jack</h5>
                            <h5 className='name'>Williams</h5>
                            <h6>Knee Replacement</h6>
                            <p className='date'>30 Feb 2023</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='appointment-card'>
                    <div className='doctor-card-content'>
                        <div className='img-time-part'>
                            <div className='image-part'>
                                <img src={Patient} alt='Patient' />
                            </div>
                            <div className='time-part'>
                                <p>5:45 PM</p>
                                <p className='gray'>Feb 24</p>
                            </div>
                        </div>
                        <div className='text-part'>
                            <h5 className='name'>Jack</h5>
                            <h5 className='name'>Williams</h5>
                            <h6>Knee Replacement</h6>
                            <p className='date'>30 Feb 2023</p>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className='appointment-card'>
                    <div className='doctor-card-content'>
                        <div className='img-time-part'>
                            <div className='image-part'>
                                <img src={Patient} alt='Patient' />
                            </div>
                            <div className='time-part'>
                                <p>5:45 PM</p>
                                <p className='gray'>Feb 24</p>
                            </div>
                        </div>
                        <div className='text-part'>
                            <h5 className='name'>Jack</h5>
                            <h5 className='name'>Williams</h5>
                            <h6>Knee Replacement</h6>
                            <p className='date'>30 Feb 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
        </div>

    )
}

export default AppointmentCard