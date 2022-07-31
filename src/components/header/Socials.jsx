import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'

const Socials = () => {
  return (
    <div className='socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://facebook.com' target="_blank"><AiFillFacebook/></a>
    </div>
  )
}

export default Socials