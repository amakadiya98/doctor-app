import React from 'react'
import '../assets/css/layout.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = (props) => {
    return (
        <div className='layout-main'>
            <div className="sider">
                <Sidebar />
            </div>
            <div className="content-part">
                <div className="header-part">
                    <Header />
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout
