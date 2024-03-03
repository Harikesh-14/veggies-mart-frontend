import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import './Header.css'

function Header() {
  return (
    <div className='headerMainContainer flex flex-row items-center justify-between w-10/12 mx-auto'>
      <div className="logoArea flex flex-row items-center gap-3">
        <img src="../../../../online-shopping.png" alt="Logo" className="w-20" />
        <span className='flex flex-row gap-1 select-none'>
          <p className='text-3xl font-bold text-green-500'>Veggies</p>
          <p className='text-3xl font-bold'>Mart</p>
        </span>
      </div>

      <div className="searchBoxArea flex flex-row items-center gap-4">
        <input type="text"
          placeholder='Search your product'
          className='w-96 h-10 bg-slate-200 p-3 border-none rounded outline-none shadow'
        />
        <button
          type='button'
          className='w-20 h-10 bg-green-500 text-white rounded shadow hover:bg-green-600 hover:translate-y-0.5 transition-all duration-200'
        >
          Search
        </button>
      </div>

      <div className="variousOptions flex flex-row items-center gap-4">
        <Link>
          <img src="../../../../heart.png"
            alt="Favorites"
            className='w-6 select-none'
          />
        </Link>
        <Link>
          <img src="../../../../shopping-cart.png"
            alt="Cart"
            className='w-6 select-none'
          />
        </Link>
        <Link>
          <img src="../../../../user.png"
            alt="Cart"
            className="w-6 select-none"
          />
        </Link>
      </div>
    </div>
  )
}

export default Header