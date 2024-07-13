import React from 'react'
import './About.css'
import theme_pattren from '../assets/under.svg'
import profile_img from '../assets/yasix_about.svg'

export default function About() {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattren} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am Yasith Imalka, an enthusiastic front-end and Java developer from Sri Lanka. Currently, I am pursuing my undergraduate studies in the Department of Computer Science and Engineering at the University of Moratuwa.</p>
                    <p> My passion lies in crafting visually appealing and user-friendly web interfaces, as well as developing robust backend systems. With a keen interest in the latest technologies and a drive for continuous learning, I am committed to building innovative solutions that make a difference.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React Js</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>NextJs</p><hr style={{width:"20%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>  
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>7+</h1>
                <p>PROJECTS COMPLETED</p>  
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>3+</h1>
                <p>HAPPY CLIENTS</p>  
            </div>
        </div>
    </div>
  )
}
