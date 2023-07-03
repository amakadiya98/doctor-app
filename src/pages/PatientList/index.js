import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import PatientCard from '../../components/PatientCard'
import { Row, Col } from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom'
const PatientList = () => {
  return (
    <Layout>
      <TopBar />
      <div className='main-content-part'>
        <Row className='g-4'>
          <Col lg="6">
          <PatientCard />
          </Col>
          <Col lg="6">
          <PatientCard />
          </Col>
          <Col lg="6">
          <PatientCard />
          </Col>
          <Col lg="6">
          <PatientCard />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default PatientList
