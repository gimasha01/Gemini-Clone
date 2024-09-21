import React from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'

const sidebar = () => {
  return (
    <div classname='sidebar'>
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt="" />
            
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                <p>New Chat</p>
            </div>

        </div>

        <div className="bottom">

        </div>

    </div>
  )
}

export default sidebar