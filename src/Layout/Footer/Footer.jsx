import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styled/global.css'



const Footer = () => {
 
  return (
    <>
      <div className='footer'>
            <img className='footer-image' src='/images/bmw.png' alt='' />

        <span>B</span>
        <span>M</span>
        <span>W</span>
      </div>
    </>
  )
}

export default Footer
