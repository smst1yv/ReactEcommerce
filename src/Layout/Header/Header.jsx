import React, { useState, useRef , useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../styled/global.css'





const Header = () => {

 


  return (
    <>
      <div className='header'style={{backgroundImage:'url(/images/bmwm.jpg)',backgroundSize: '100%'}}>
        <div className='logo-login'>
          <div className='logo'>
            <img src='/images/bmw.png' alt='' />
          </div>
          <div className='search'>
          <input className="input-inset" type="text" placeholder="Search" />
          </div>
          <div className='menu'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/shop">Shop</Link></li>
            </ul>
          </div>
          <div className='login-basket'>
            <Link to="/signup"><i className="fa-solid fa-user"></i></Link>
            <Link to="/wishlist"><i className="fa-solid fa-heart"></i> <sup style={{color:'red'}}>0</sup> </Link>
            <Link to="/basket"><i className="fa-solid fa-cart-shopping"></i> <sup style={{color:'red'}}>0</sup> </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
