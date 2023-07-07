import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import PatientCard from '../../components/PatientCard'
import { Row, Col } from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom'
import SearchIcon from '../../assets/images/search.svg'
import CardEx1 from '../../assets/images/cardEX.png'
import CardEx2 from '../../assets/images/cardEX2.png'
import CardEx3 from '../../assets/images/cardEX3.png'
import CardEx4 from '../../assets/images/cardEX4.png'
import CardEx5 from '../../assets/images/cardEX5.png'
import CardEx6 from '../../assets/images/cardEX6.png'
import CardEx7 from '../../assets/images/cardEX7.png'
import CardEx8 from '../../assets/images/cardEX8.png'
const Excersice = () => {
  return (
    <Layout>
      <TopBar />
      <div className='main-content-part'>
      <div className='serchPart'>
          <div className='searchInput'>
            <div className='searchIcon'>
              <img src={SearchIcon} alt='searchIcon' />
            </div>
            <input type='text' placeholder='Search exercises' />
          </div>
        </div>
        <Row className='g-4'>
          <Col xl="3" lg="4" md="6" sm="12">
            <div className='ex-card'>
                <div className='ex-image'>
                    <img src={CardEx1} alt='CardEx1' />
                </div>
                <h6>Ankle</h6>
            </div>
          </Col>
          <Col xl="3" lg="4" md="6" sm="12">
            <div className='ex-card'>
                <div className='ex-image'>
                    <img src={CardEx2} alt='CardEx1' />
                </div>
                <h6>Stomach</h6>
            </div>
          </Col>
          <Col xl="3" lg="4" md="6" sm="12">
            <div className='ex-card'>
                <div className='ex-image'>
                <img src={CardEx3} alt='CardEx1' />
                </div>
                <h6>Elbow</h6>
            </div>
          </Col>
          <Col xl="3" lg="4" md="6" sm="12">
            <div className='ex-card'>
                <div className='ex-image'>
                <img src={CardEx4} alt='CardEx1' />
                </div>
                <h6>Face</h6>
            </div>
          </Col>
          <Col xl="3" lg="4" md="6" sm="12">
            <div className='ex-card'>
                <div className='ex-image'>
                <img src={CardEx5} alt='CardEx1' />
                </div>
                <h6>Head</h6>
            </div>
          </Col>
          <Col xl="3" lg="4" md="6" sm="12">
            <div className='ex-card'>
                <div className='ex-image'>
                <img src={CardEx6} alt='CardEx1' />
                </div>
                <h6>Finger</h6>
            </div>
          </Col>
          <Col xl="3" lg="4" md="6" sm="12">
            <div className='ex-card'>
                <div className='ex-image'>
                <img src={CardEx7} alt='CardEx1' />
                </div>
                <h6>Knee</h6>
            </div>
          </Col>
          <Col xl="3" lg="4" md="6" sm="12">
            <div className='ex-card'>
                <div className='ex-image'>
                <img src={CardEx8} alt='CardEx1' />
                </div>
                <h6>Foot</h6>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Excersice
