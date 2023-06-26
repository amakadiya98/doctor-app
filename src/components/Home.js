import React from 'react'
import landingBack from '../assets/images/landing-bg.png';
import '../assets/css/home.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }
    return (
        <div className='home-main'>
            <img src={landingBack} alt='hero-bg' className='home-bg' />
            <div className='main-title' onClick={() => handleClick()}>
                <h2>doctors</h2>
            </div>
        </div>
    )
}

export default Home
