import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import { Row, Col, Form, Button } from 'react-bootstrap';
const ContactInformation = () => {
  return (
    <Layout>
      <TopBar />
      <div className='main-content-part'>
      <div className='form-data full-width-data'>
          <h5 className='title'>Contact Information</h5>
          <Row className='g-4'>
            <Col lg="6">
              <div className='filed'>
                <label>Patient Mobile Number</label>
                <input type='text' className='input-field' placeholder='+1 123 456 789' />
              </div>
              <div className='filed'>
                <label>Emergency Mobile Number</label>
                <input type='text' className='input-field' placeholder='+1 123 456 789' />
              </div>
              <div className='filed'>
                <label>Email Id</label>
                <input type='text' className='input-field' placeholder='Jack williams@gmail.com' />
              </div>
            </Col>
            <Col lg="6">
              <div className='filed'>
                <label>Address</label>
                <input type='text' className='input-field' placeholder='Address line 1' />
              </div>
              <div className='filed'>
                <input type='text' className='input-field' placeholder='Address line 2' />
              </div>
              <Row>
                <Col lg="6" className='mb-3'>
                <Form.Select aria-label="Default select example">
                  <option>City</option>
                  <option value="1">City One</option>
                  <option value="2">City Two</option>
                  <option value="3">City Three</option>
                </Form.Select>
                </Col>
                <Col lg="6" className='mb-3'>
                <Form.Select aria-label="Default select example">
                  <option>State</option>
                  <option value="1">State One</option>
                  <option value="2">State Two</option>
                  <option value="3">State Three</option>
                </Form.Select>
                </Col>
                <Col lg="6"   className='mb-3'>
                <Form.Select aria-label="Default select example">
                  <option>County</option>
                  <option value="1">County One</option>
                  <option value="2">County Two</option>
                  <option value="3">County Three</option>
                </Form.Select>
                </Col>
                <Col lg="6"  className='mb-3'>
                <Form.Select aria-label="Default select example"  className='mb-3'>
                  <option>Pincode</option>
                  <option value="1">Pincode One</option>
                  <option value="2">Pincode Two</option>
                  <option value="3">Pincode Three</option>
                </Form.Select>
                </Col>
              </Row>
              </Col>
          </Row>
          <div className='buttonPart mt-5 d-flex justify-content-center'>
            <Button className='theme-button'>Done</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactInformation
