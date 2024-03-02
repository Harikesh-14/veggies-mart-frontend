import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

import './TopHeader.css'

function TopHeader() {
    return (
        <div className='topHeader flex justify-center items-center h-10'>
            <div className="topHeaderMainContainer">
                <div className='leftSide'>
                    <ul className='flex flex-row gap-16'>
                        <li className='tab cursor-pointer'>
                            <Link to={'/account'}>Account</Link>
                        </li>
                        <li className='tab cursor-pointer'>
                            <Link to={'/track-order'}>Track Order</Link>
                        </li>
                        <li className='tab cursor-pointer'>
                            <Link to={'/support'}>Support</Link>
                        </li>
                    </ul>
                </div>
                <div className='rightSide'>
                    <ul className='flex flex-row gap-8'>
                        <li className='font-semibold'><FontAwesomeIcon icon={faPhone} /> +91 9319958749</li>
                        <li className="font-semibold"><FontAwesomeIcon icon={faAt} /> ranjansinhaharikesh@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
