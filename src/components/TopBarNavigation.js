import React from 'react'
import '../assets/css/commonComponent.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const TopBarNavigation = () => {
  return (
    <div className='topBar'>
    <div className='theraphy-name'>
      <h6 className='title'>Physiotherapist</h6>
    </div>
    <div className='navigation'>
        <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item  active>
          Physiotherapist
        </Breadcrumb.Item>
        </Breadcrumb>
    </div>
  </div>
  )
}

export default TopBarNavigation