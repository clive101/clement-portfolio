import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
 const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
 <a href='#'  className={activeNav ==='#' ? 'active' : ''}><AiOutlineHome/></a> 
<a href='#about'  className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser/></a> 
  <a href='#experience' className={activeNav ==='#experience' ? 'active' : ''}><BiBook/></a>
<a href='#service' className={activeNav ==='#service' ? 'active' : ''}><RiServiceLine/></a>
<a href='#contact'  className={activeNav ==='#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>  
    </nav>
  )
}

export default Nav