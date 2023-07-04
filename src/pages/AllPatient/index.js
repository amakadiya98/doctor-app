import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import UpcomingPatientsCard from '../../components/UpcomingPatientsCard'
import { Row, Col } from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom'
import SearchIcon from '../../assets/images/search.svg'

const AllPatient = () => {
  return (
    <Layout>
         <TopBar />
      <div className='main-content-part'>
        <div className='serchPart'>
          <div className='searchInput'>
            <div className='searchIcon'>
              <img src={SearchIcon} alt='searchIcon' />
            </div>
            <input type='text' placeholder='Search patient' />
          </div>
        </div>
        <Row className='g-4'>
          <Col lg="6">
            <Link
              to='/patientDetails' className='linkCard'>
              <UpcomingPatientsCard />
            </Link>
          </Col>
          <Col lg="6">
            <Link to='/patientDetails' className='linkCard'>
              <UpcomingPatientsCard />
            </Link>
          </Col>
          <Col lg="6">
            <Link to='/patientDetails' className='linkCard'>
              <UpcomingPatientsCard />
            </Link>
          </Col>
          <Col lg="6">
            <Link to='/patientDetails' className='linkCard'>
              <UpcomingPatientsCard />
            </Link>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default AllPatient
