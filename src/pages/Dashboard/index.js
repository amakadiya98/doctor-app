import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import AppointmentCard from '../../components/AppointmentCard'
import AssignDoctor from '../../components/AssignDoctor'
import '../../assets/css/commonComponent.css'


const Dashboard = () => {
  return (
    <Layout>
        <div className='main-home-part'>
          <div className='head-data'>
            <h6>Good Morning</h6>
            <h5>Dr. Kate Brown</h5>
          </div>
          <div className='slider-part'>
          <div className='slider-title-block'>
            <h5 className='slider-title'>Upcoming Appointment</h5>
            <Link to="">
              View All
            </Link>
          </div>
          <div className='slider-item mt-4'>
            <AppointmentCard/>
          </div>
          </div>
          
          <div className='slider-part'>
          <div className='slider-title-block'>
            <h5 className='slider-title'>Physiotherapist</h5>
            <Link to="">
              View All
            </Link>
          </div>
          <div className='slider-item mt-4'>
            <AssignDoctor/>
          </div>
          </div>
          
        </div>
    </Layout>
  )
}

export default Dashboard
