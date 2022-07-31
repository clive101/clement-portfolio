import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Possesive</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_development'>
          <h3>Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
<BsPatchCheckFill  className='experience_details-icon'/>
<div>
<h4>HTML</h4>
</div>
            </article>
            <article className='experience_details'>
<BsPatchCheckFill className='experience_details-icon'/>
<div>
<h4>JAVASCRIPT</h4>
</div>
            </article>
            <article className='experience_details'>
<BsPatchCheckFill className='experience_details-icon'/>
<div>
<h4>TYPESCRIPT</h4>
</div>
            </article>
            <article className='experience_details'>
<BsPatchCheckFill className='experience_details-icon'/>
<div>
<h4>CSS</h4></div>
            </article>
            <article className='experience_details'>
<BsPatchCheckFill className='experience_details-icon'/>
<div>
<h4>REACT</h4></div>
            </article>
            <article className='experience_details'>
<BsPatchCheckFill className='experience_details-icon'/>
<div>
<h4>HTML</h4></div>
            </article>

          </div>
        </div>

        <div className='experience_testing'>
        <h3>Testing</h3>
          <div className='experience_content'>
            <article className='experience_details'>
<BsPatchCheckFill className='experience_details-icon'/>
<div>
<h4>Selenium</h4></div>
            </article>
            <article className='experience_details'>
<BsPatchCheckFill className='experience_details-icon'/>
<div>
<h4>Cucumber</h4></div>
            </article>
            <article className='experience_details'>
<BsPatchCheckFill className='experience_details-icon'/>
<div>
<h4>BDD</h4></div>
            </article>
            <article className='experience_details'>
<BsPatchCheckFill className='experience_details-icon'/>
<div>
<h4>UFT</h4></div>
            </article>
            <article className='experience_details'>
<BsPatchCheckFill className='experience_details-icon'/>
<div>
<h4>ALM</h4></div>
            </article>
            <article className='experience_details'>
<BsPatchCheckFill className='experience_details-icon'/>
<div>
<h4>HTML</h4></div>
            </article>

          </div>
        </div>
        </div>
      

    </section>
  )
}

export default Experience