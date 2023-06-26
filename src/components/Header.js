import React from 'react';
import '../assets/css/header.css';
import { BsSearch } from 'react-icons/bs'
import notificationIcon from '../assets/images/notification.svg'
import Avatar from 'react-avatar';
import profileImg from '../assets/images/Ellipse 179.svg'
import { Dropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='header-main'>
            <div className="search-part">
                <input type="text" placeholder='search doctors' />
                <BsSearch size={16} className='icon-search' />
            </div>
            <div className="profile-part">
                <div className="notification-block">
                    <img src={notificationIcon} alt="notification-icon" width='20px'/>
                    <div className="noti-no">4</div>
                </div>
                <div className="profile">
                    <Avatar src={profileImg} size='40'/>
                    <Dropdown>
                        <Dropdown.Toggle id='dropdown-profile' className='btn-custom'>Kate </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href='#'>Account</Dropdown.Item>
                            <Dropdown.Item href='#'>Patients</Dropdown.Item>
                            <Dropdown.Item href='#'>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Header
