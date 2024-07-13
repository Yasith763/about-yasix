import React from 'react'
import './Hero.css'
import profile_img from '../assets/yasix.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import CV from '../assets/CV.pdf';

export default function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Yasith Imalka,</span> frontend developer based in Sri Lanka.</h1>
        <p>I am a student of University of Moratuwa in 22nd batch of Department of Computer Science and Engineering.</p>
        <div className='hero-action'>
          <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div  className='hero-resume'>
            <a href={CV} target="_blank" rel="noreferrer">My resume</a>
          </div>
        </div>
    </div>
  )
}
