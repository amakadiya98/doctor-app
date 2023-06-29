import React from 'react'
import logo from '../assets/images/docpy.svg'
import '../assets/css/sidebar.css'
import logout from '../assets/images/signOut.svg'
import home from '../assets/images/home.svg'
import patient from '../assets/images/patients.svg'
import point from '../assets/images/point.svg'
import homeActive from '../assets/images/homeActive.svg'
import pointActive from '../assets/images/pointActive.svg'
import patientActive from '../assets/images/patientActive.svg'
import { useLocation, Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation();
  const activePage = location.pathname.replace('/', '');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  }

  return (
    <div className='sidebar-main'>
      <div className="logo-part">
        <img src={logo} alt="docpy-logo" width={150} />
      </div>
      <button className='btn btn-add'>+ Add Exercises</button>
      <div className="nav-part">
        <div className="top-navpart">
          <Link
            to='/dashboard'
            style={{ textDecoration: "none", color: "inherit" }}>
            <div className={` ${activePage === 'dashboard' || activePage === 'doctorList' ? 'nav-btn active' : 'nav-btn'}`}>
              <img src={activePage === 'dashboard' || activePage === 'doctorList' ? homeActive : home} alt="" className='icon' />
              <p className='text'>Home</p>
            </div>
          </Link>
          <Link
            to='/patient'
            style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`${activePage === 'patient' ? 'nav-btn active' : 'nav-btn'}`}>
              <img src={activePage === 'patient' ? patientActive : patient} alt="" className='icon' />
              <p className='text'>Patient</p>
            </div>
          </Link>
          <Link
            to='/point'
            style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`${activePage === 'point' ? 'nav-btn active' : 'nav-btn'}`}>
              <img src={activePage === 'point' ? pointActive : point} alt="" className='icon' />
              <p className='text'>Point</p>
            </div>
          </Link>
        </div>
        <div className="bottom-logoutpart">
          <button className='logout-btn' onClick={() => handleLogout()}>
            <img src={logout} alt="logout-icon" className='icon' />
            <p className='text'>Logout</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
