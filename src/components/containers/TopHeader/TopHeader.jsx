import React from 'react'
import { Link } from 'react-router-dom'

import './TopHeader.css'

function TopHeader() {
  return (
    <div className='flex flex-row'>
        <div>
            <ul className='flex flex-row'>
                <li>
                    <Link to={'/account'}>Account</Link>
                </li>
                <li>
                    <Link to={'/track-order'}>Track Order</Link>
                </li>
                <li>
                    <Link to={'/support'}>Support</Link>
                </li>
            </ul>
        </div>
        <div className='rightSide'>
            <ul className='flex flex-row'>
                <li>+91 9319958749</li>
                <li>ranjansinhaharikesh@gmail.com</li>
            </ul>
        </div>
    </div>
  )
}

export default TopHeader