import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function GetCoupons() {
  return (
    <div className='relative w-full flex flex-row justify-between bg-green-500'>
      <div>
        <img src="../../../../vegetable-border-image.webp"/>
      </div>
      <div className='absolute left-1/4 flex flex-row justify-between items-center'>
        <div>
          <img src="../../../../vegetable-holder.webp" className='h-[25.5rem]' />
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl font-bold text-white'>Get 20% off Discount Coupon</h1>
          <p className='text-center text-white text-xl'>By subscribing our newsletter</p>

          <div className='h-10 mt-10 bg-white flex flex-row'>
            <FontAwesomeIcon icon={faEnvelope} className='text-2xl m-2'/>
            <input type="text" placeholder='Enter your Email Id' className='border-none outline-none w-3/5 px-3'/>
            <button type='button' className='w-2/5 bg-yellow-500 font-semibold'>Get Coupon &gt;</button>
          </div>
        </div>
      </div>
      <div>
        <img src="../../../../vegetable-border-image.webp" className='rotate-180'/>
      </div>
    </div>
  )
}

export default GetCoupons