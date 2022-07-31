import React from 'react'
import './header.css'
import CTA from './CTA'
import Ball from '../../pictures/ball.jpg'
import Socials from './Socials'
const Header = () => {
  return (
  <header>
    <div className='container header_container'>
      <h5>Hello Im</h5>
      <h1> Clement appoles</h1>
      <h5 className='text-light'>Developer</h5>
<CTA/>
<Socials/> 
<div className='ball'>
<img src={Ball} alt='ball'/>
</div>

< a href='#contact' className='scroll_down'>Scroll Down</a> 
    </div>
    </header>
  )
}

export default Header