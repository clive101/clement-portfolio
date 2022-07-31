import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Star from '..//../pictures/star.jpg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Kmow</h5>
      <h2>More About Me</h2>

<div className='about_container'>
  <div className='about_me'>
    <div className='about_me_image'>
      <img src={Star} alt='About Image' />
    </div>
  </div>

  <div className='about_content'>
    <div className='about_cards'>
      <article className='about_card'>
        <FaAward className='about_icon'/>
      <h5>Experience</h5>
      <small>2+ Years Working Experience</small>
      </article>

      <article className='about_card'>
        <FiUsers className='about_icon'/>
      <h5>Clients</h5>
      <small>20+ Locally</small>
      </article>

      <article className='about_card'>
        <VscFolderLibrary className='about_icon'/>
      <h5>Projects</h5>
      <small>20+ Completed</small>
      </article>
    </div>

    <p>

    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p>

    <a href='#contact' className='btn btn-primary'> Lets Talk</a>
  </div>
</div>

    </section>
  )
}

export default About