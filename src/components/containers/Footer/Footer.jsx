import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='h-[250px] w-full bg-black text-white py-10 flex justify-center items-start'>
      <div className='w-10/12 h-full flex flex-row justify-between items-start'>
        {/* first section */}
        <div className='h-full flex flex-col justify-between'>
          <div className='flex flex-row justify-between items-center gap-3'>
            <img src="../../../../online-shopping.png" alt="Logo" className='w-12' />
            <span className='flex flex-row gap-1 text-3xl font-semibold'>
              <p className='text-green-600'>Veggie</p>
              <p>Mart</p>
            </span>
          </div>
          <div className='flex flex-col gap-1'>
            <Link>Track Order</Link>
            <Link>Delivery and Returns</Link>
            <Link>Warranty</Link>
          </div>
        </div>

        {/* second section */}
        <div className='h-full flex flex-col justify-between'>
          <div>
            <p className='text-2xl'>About Us</p>
          </div>
          <div className='flex flex-col justify-between gap-1'>
            <Link>Our Story</Link>
            <Link>Work with us</Link>
            <Link>Corporate News</Link>
            <Link>Investor</Link>
          </div>
        </div>

        {/* third section */}
        <div className='h-full flex flex-col justify-between'>
          <div>
            <p className='text-2xl'>Useful Links</p>
          </div>
          <div className='flex flex-col justify-between gap-1'>
            <Link>Secure Payment</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Archived Products</Link>
          </div>
        </div>

        {/* fourth section */}
        <div className='h-full flex flex-col justify-between gap-1'>
          <div>
            <p className='text-2xl'>Contact Information</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <div className='w-10 h-10 flex justify-center items-center rounded-full border'>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <p className='font-semibold'>Address:</p>
              <p className=' font-light'>123, Veggies Mart, New Delhi, India</p>
            </div>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <div className='w-10 h-10 flex justify-center items-center rounded-full border'>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div>
              <p className='font-semibold'>Phone:</p>
              <p className='font-light'>+91 9483924894</p>
            </div>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <div className='w-10 h-10 flex justify-center items-center rounded-full border'>
              <FontAwesomeIcon icon={faHashtag} />
            </div>
            <div>
              <p className='font-semibold'>Instagram:</p>
              <p className='font-light'>@veggiesmart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
