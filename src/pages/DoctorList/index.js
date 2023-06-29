import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import DoctorCard from '../../components/DoctorCard'
import { Row, Col } from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom'
const DoctorList = () => {
  return (
    <Layout>
      <TopBar />
      <div className='main-content-part'>
        <Row className='g-4'>
          <Col lg="6">
            <Link
              to='/' className='linkCard'>
              <DoctorCard />
            </Link>
          </Col>
          <Col lg="6">
            <Link to='/' className='linkCard'>
              <DoctorCard />
            </Link>
          </Col>
          <Col lg="6">
            <Link to='/' className='linkCard'>
              <DoctorCard />
            </Link>
          </Col>
          <Col lg="6">
            <Link to='/' className='linkCard'>
              <DoctorCard />
            </Link>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default DoctorList
