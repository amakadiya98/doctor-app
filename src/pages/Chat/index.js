import { useState, React } from 'react'
import '../../assets/css/chat.css'
import BackIcon from '../../assets/images/left.svg'
import CallBlack from '../../assets/images/call-2.svg'
import Button from 'react-bootstrap/Button';
import Person from '../../assets/images/onlineUser.png'
import Clip from '../../assets/images/clip.svg'
import Picture from '../../assets/images/picture.svg'
import Sent from '../../assets/images/sent.svg'
import SeacrchIcon from '../../assets/images/search.svg'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Ex1 from '../../assets/images/ex-1.png'

const Chat = () => {
    const [key, setKey] = useState('patient');
    return (
       <>
        <div className='chat-page'>
            <div className='header-part'>
                <div className='back-button'>
                    <Button className="back">
                        <img src={BackIcon} alt='back'/>
                    </Button>
                </div>
                <div className='name-call'>
                    <div className='profile'>
                        <div className='image'>
                            <img src={Person} alt='Person'/>
                        </div>
                        <div className='user-name ms-3'>
                            <p>Kate Brown</p>
                            <p className='status'>Online</p>
                        </div>
                    </div>
                    <Button className="call">
                        <img src={CallBlack} alt='back'/>
                    </Button>
                </div>
            </div>
            <div className='main-chat-part'>
                <div className='chat-side-part'>
                    <div className='chat-person'>
                        <div className='tab-part-data exercise-tab-part mt-0'>
                        <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3 mt-0"
                    >
                        <Tab eventKey="patient" title="Patient">
                        <div className='tab-ans-part'>
                            <div className='search-box'>
                                <input className='searchInput' placeholder='Search' />
                                <div className='searchIcon'>
                                    <img src={SeacrchIcon} alt='icon'/>
                                </div>
                            </div>
                            <div className='chatting-person'>
                                <div className='chat-card'>
                                    <div className='image-blovk'>
                                        <img src={Person} alt='user'/>
                                    </div>
                                    <div className='text-block'>
                                        <div className='left'>
                                            <p>Michael Simpson</p>
                                            <small>Yes it’s perfect for me</small>
                                        </div>
                                        <div className='right'>
                                            <p className='time'>9:11</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='chat-card active'>
                                    <div className='image-blovk'>
                                        <img src={Person} alt='user'/>
                                    </div>
                                    <div className='text-block'>
                                        <div className='left'>
                                            <p>Michael Simpson</p>
                                            <small>Yes it’s perfect for me</small>
                                        </div>
                                        <div className='right'>
                                            <p className='time'>9:11</p>
                                            <p className='msg-badge'>4</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='chat-card'>
                                    <div className='image-blovk'>
                                        <img src={Person} alt='user'/>
                                    </div>
                                    <div className='text-block'>
                                        <div className='left'>
                                            <p>Michael Simpson</p>
                                            <small>Yes it’s perfect for me</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Tab>
                        <Tab eventKey="trainer" title="Trainer">
                        <div className='tab-ans-part'>
                            <div className='search-box'>
                                <input className='searchInput' placeholder='Search' />
                                <div className='searchIcon'>
                                    <img src={SeacrchIcon} alt='icon'/>
                                </div>
                            </div>
                            <div className='chatting-person'>
                                <div className='chat-card'>
                                    <div className='image-blovk'>
                                        <img src={Person} alt='user'/>
                                    </div>
                                    <div className='text-block'>
                                        <div className='left'>
                                            <p>Michael Simpson</p>
                                            <small>Yes it’s perfect for me</small>
                                        </div>
                                        <div className='right'>
                                            <p className='time'>9:11</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='chat-card active'>
                                    <div className='image-blovk'>
                                        <img src={Person} alt='user'/>
                                    </div>
                                    <div className='text-block'>
                                        <div className='left'>
                                            <p>Michael Simpson</p>
                                            <small>Yes it’s perfect for me</small>
                                        </div>
                                        <div className='right'>
                                            <p className='time'>9:11</p>
                                            <p className='msg-badge'>4</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='chat-card'>
                                    <div className='image-blovk'>
                                        <img src={Person} alt='user'/>
                                    </div>
                                    <div className='text-block'>
                                        <div className='left'>
                                            <p>Michael Simpson</p>
                                            <small>Yes it’s perfect for me</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Tab>
                    </Tabs>
                        </div>
                       
                    </div>
                </div>
                <div className='messages-part'>
                    <div className='chatting'>
                    <div className='messages reciver'>
                        <div className='message-card '>
                            <p>Lorem Ipsum is simply dummy </p>
                        </div>
                        <p className='timer'>9:58 AM</p>
                    </div>
                    <div className='messages sender'>
                        <div className='message-card '>
                            <p>Lorem Ipsum is simply dummy </p>
                        </div>
                        <p className='timer'>9:58 AM</p>
                    </div>
                    <div className='messages reciver'>
                        <div className='message-card '>
                            <p>Lorem Ipsum is simply dummy </p>
                        </div>
                        <p className='timer'>9:58 AM</p>
                    </div>
                    <div className='messages sender'>
                        <div className='message-card '>
                            <p>Lorem Ipsum is simply dummy </p>
                        </div>
                        <p className='timer'>9:58 AM</p>
                    </div>
                    <div className='messages reciver'>
                        <div className='message-card '>
                            <p>Lorem Ipsum is simply dummy </p>
                        </div>
                        <p className='timer'>9:58 AM</p>
                    </div>
                    <div className='messages sender'>
                        <div className='message-card '>
                            <p>Lorem Ipsum is simply dummy </p>
                        </div>
                        <p className='timer'>9:58 AM</p>
                    </div>
                    <div className='messages reciver'>
                        <div className='message-card '>
                            <p>Lorem Ipsum is simply dummy </p>
                        </div>
                        <p className='timer'>9:58 AM</p>
                    </div>
                    <div className='messages sender'>
                        <div className='message-card '>
                            <p>Lorem Ipsum is simply dummy </p>
                        </div>
                        <p className='timer'>9:58 AM</p>
                    </div>
                    <div className='messages reciver'>
                        <div className='message-card '>
                            <p>Lorem Ipsum is simply dummy </p>
                        </div>
                        <p className='timer'>9:58 AM</p>
                    </div>
                    <div className='messages sender'>
                        <div className='message-card '>
                            <p>Lorem Ipsum is simply dummy </p>
                        </div>
                        <p className='timer'>9:58 AM</p>
                    </div>
                    </div>
                   
                    <div className='message-typing-block'>
                        <div className='input-box'>
                            <input type='text' className='msg-type' placeholder='Type…'/>
                            <Button className='file-attach'>
                                <img src={Clip} alt='clip'/>
                            </Button>
                            <Button className='image-attach'>
                                <img src={Picture} alt='clip'/>
                            </Button>
                        </div>
                        <div className='sent-btn'>
                            <Button className='sent'>
                                <img src={Sent} alt='sent'/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default Chat
