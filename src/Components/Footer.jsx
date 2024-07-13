import React from 'react'
import './Footer.css'
import footer_logo from '../assets/new_logo.svg'
import user_icon from '../assets/user_icon.svg'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a frontend developer from, Sri Lanka with 1 years of experience.</p>
            </div>
            <div className="footrt-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type='email' placeholder='Enter Your Email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left"><span>©</span> 2024 Yasith Imalka. All rights reserved.</p>
            <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p> 
            </div>
        </div>
    </div>
  )
}
